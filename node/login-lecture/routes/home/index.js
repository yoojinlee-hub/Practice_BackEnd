"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    //기능
    res.render("home/index")
});

router.get("/login", (req, res) => {
    //기능
    res.render("home/login")
});

module.exports = router;
