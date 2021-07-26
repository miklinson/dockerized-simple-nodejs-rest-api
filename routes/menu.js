const express = require('express')
const router = express.Router()

const menuService = require('../services/menu.service')
const menuSteakService = require('../services/menu.steak.service')

router.get('/', menuService.getMenu)
router.get('/steak', menuSteakService.getSteak) 

module.exports = router