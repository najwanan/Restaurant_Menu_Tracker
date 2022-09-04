const express = require("express");
const router = express.Router();
//add controllers
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
//const { ensureAuth, ensureGuest } = require("../middleware/auth");

//add routes
router.get('/', indexController.getHome)
router.post('/query', indexController.getSearch)

module.exports = router;
