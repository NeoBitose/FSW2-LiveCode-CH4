const { User } = require("../models");
const imagekit = require("../lib/imagekit");

// Function for get all user data
async function userPage(req, res) {
    try {
        const users = await User.findAll();
        console.log(users)
        res.render("users/index", {
            users
        })
    } 
    catch (error) {
        res.render("error", {
            message: error.message
        })
    }
}

async function createPage(req, res) {
    try {
        // console.log(users)
        res.render("users/create")
    } 
    catch (error) {
        res.render("error", {
            message: error.message
        })
    }
}

async function insertUser(req, res) {
    const newUser = req.body;
    try {
        await User.create({...newUser});
        const users = await User.findAll();
        res.render("users/index", {
            users
        })
    } catch (error) {
        res.render("error", {
            message: error.message
        })
    }
}

module.exports = {
    userPage,
    createPage,
    insertUser
};
