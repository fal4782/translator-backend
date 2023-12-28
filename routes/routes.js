const router = require('express').Router()
const translateRouter = require('../features/translate/translate.route')

router.use('/translate',translateRouter)



module.exports = router