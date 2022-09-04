const schemas = require('../models/schema.js')
//searches data, renders to homepage
module.exports = {
    getHome: async (req, res) => {
        let menu = schemas.menu
        let sesh = req.session
        
        let menuResult = await menu.find({})
            .then((menuData) => {
            res.render('index', {title: 'Menu Tracker', data: menuData, search: '', loggedIn: sesh.loggedIn})
        })
    },

    getSearch: async (req, res) => {
        let menu = schemas.menu
        let sesh = req.session
        let q = req.body.searchInput //pull data from the form 
        let menuData = null 
        let qry = { name: { $regex: '^' + q }, $options: 'i' } //i refers to ignore case
        
        if (q != null) {
            let menuResult = await menu.find(qry)
                .then((data) => {
                menuData = data
            })
        }
        //render results of query to index view
          res.render("index", {
            title: "Menu Tracker",
            data: menuData,
            search: q,
            loggedIn: sesh.loggedIn,
          });
    }
}
