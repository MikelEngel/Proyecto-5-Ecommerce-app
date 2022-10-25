const express = require("express");
const router = express.Router();
const userRouter = require("./User.route");
const EstanteriaRouter = require("./Estanteria.route");

router.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to API!</h1>
    `); 
});

route.use("/user", userRouter);
route.use("/Estanteria", EstanteriaRouter);


module.exports = router;

