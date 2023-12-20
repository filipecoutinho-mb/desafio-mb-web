import * as path from 'path'
import * as fs from 'fs'
import { createServer } from 'vite'
import { URL } from 'url'

const __dirname = new URL('./', import.meta.url).pathname

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

const register_get = async (req, res) => {
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
}

const register_post = async (req, res, next) => {
  const { email, type, name, phone, password } = req.body
  let client = {}
  if (type === 'pessoaFisica') {
    const { cpf, birthdate } = req.body
    client = {
      email,
      name,
      cpf,
      birthdate,
      phone,
      password,
    }
  } else if (type === 'pessoaJuridica') {
    const { cnpj, foundationdate } = req.body
    client = {
      email,
      name,
      cnpj,
      foundationdate,
      phone,
      password,
    }
  } else {
    res.status(422).json({ error: 'Tipo de cliente inválido' })
    return
  }

  let hasEmptyFields = false

  for (let key in client) {
    if (client[key].length === 0) {
      hasEmptyFields = true
    }
  }

  if (hasEmptyFields)
    res.status(422).json({ error: 'Cliente com campos em branco.' })
  else res.status(201).json({ message: 'Sucesso!', client: client })
}

export { register_get, register_post }
