const express = require('express')
const router = express.Router()
const sharkController = require('../controllers/shark.controller')

router.get("/", sharkController.index)

module.exports = router
