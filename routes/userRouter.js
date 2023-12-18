const { signUp, logIn } = require('../controller')
const router = require('express').Router()

router.post('/signUp', signUp)
router.get('/logIn', logIn)

module.exports = router