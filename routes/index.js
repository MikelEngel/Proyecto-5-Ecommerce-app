// const { Router } = require('express');
const express = require("express");
// const { route } = require('./User.route');
const router = express.Router();
const userRouter = require("./User.route");

router.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to API!</h1>
    `); 
});

route.use("/user", userRouter);

module.exports = router;

