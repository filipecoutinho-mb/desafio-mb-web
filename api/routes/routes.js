const { Router } = require('express')
const controller = require('../controllers/controller')

const router = Router()

router.get('/', controller.register_get)
router.post('/', controller.register_post)

module.exports = router