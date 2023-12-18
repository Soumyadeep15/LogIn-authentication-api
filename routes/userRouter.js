const { createNewUser, authenticate } = require('../controller')
const router = require('express').Router()

router.post('/createNewUser', createNewUser)
router.get('/auth', authenticate)

module.exports = router