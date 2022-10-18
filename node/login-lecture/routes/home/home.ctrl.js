"use strict";

const hello = (req,res) => {
    res.render("home/index");
};

const login = (req, res) => {
    //기능
    res.render("home/login")
};

module.exports = {
    hello, //hello:hello
    login, //login:login
};