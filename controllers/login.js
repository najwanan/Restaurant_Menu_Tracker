//from the router display the logiin page, display the signup page, logout

const schemas = require('../models/schemas.js')
const bcrypt = require('bcrypt')

exports.getLogin = (req, res) => {
    res.render('login', {title: 'Login', loggedIn: false, error:null})
}

exports.getSignup = (req, res) => {
    res.render('new-acct', {title: 'New Account', loggedIn: false, error:null})
}

exports.getLogout = (req, res) => {
    req.session.destroy() 
    res.redirect('/')
}

exports.postLogin = async (req, res) => {
    let email = req.body.emailInput
    let pass = req.body.pwdInput
    let loginSuccess = false
    let sesh = req.session
    sesh.loggedIn = false

    let users = schemas.users
    let qry = { email: email }

    //looks in db to see if it can find a matching database

    if (email != '' && pass !== '') {
        let usersResult = await users.findOne(qry)
            .then(async(data => {
                if (data) {
                    let passResult = await bcrypt.compare(pass, data.pwd)
                        .then((isMatch) => {
                            sesh.loggedIn = true
                            loginSuccess = true
                    })
            }
        }))
    }
    if (loginSuccess === true) {
        res.redirect('/')
    } else {
        res.render('login', {title:'Login', loggedIn: false, error: 'Invalid Login'})
    }



    exports.postSignup = async (req, res) => {
        let email = req.body.emailInput
        let pass = req.body.pwdInput
    }
}