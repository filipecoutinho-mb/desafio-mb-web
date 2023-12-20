import { Router } from 'express'
import * as controller from '../controllers/controller.js'

const router = Router()

router.get('/', controller.register_get)
router.post('/', controller.register_post)

export default router
