import express from 'express'
import * as path from 'path'
import * as fs from 'fs'
import { createServer } from 'vite'
import { URL } from 'url'

import router from './server/routes/routes.js'

const __dirname = new URL('./', import.meta.url).pathname

const server = express()

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

// Use vite's connect instance as middleware. If you use your own
// express router (express.Router()), you should use router.use
server.use(vite.middlewares)
server.get('/auth', async (req, res) => {
  // 1. Read index.html
  let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')

  // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
  //    and also applies HTML transforms from Vite plugins, e.g. global
  //    preambles from @vitejs/plugin-react
  template = await vite.transformIndexHtml(req.originalUrl, template)

  // 3. Load the server entry. ssrLoadModule automatically transforms
  //    ESM source code to be usable in Node.js! There is no bundling
  //    required, and provides efficient invalidation similar to HMR.
  const render = (await vite.ssrLoadModule('/src/entry-server.js')).render

  // 4. render the app HTML. This assumes entry-server.js's exported
  //     `render` function calls appropriate framework SSR APIs,
  //    e.g. ReactDOMServer.renderToString()
  const { html: appHtml } = await render()

  // 5. Inject the app-rendered HTML into the template.
  const html = template.replace('<!--main-app-->', appHtml)

  // 6. Send the rendered HTML back.
  res.set({ 'Content-Type': 'text/html' }).end(html)
})

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.get('/', (req, res) =>
  res.send(
    '<h1>Bem vindo à API da MB</h1><ol><li>Acesse /registration para autenticação.</li></ol>'
  )
)
server.use('/registration', router)

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/')
})
