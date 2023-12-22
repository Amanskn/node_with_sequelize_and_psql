const { Router } = require("express");
const { createUser, getUsers } = require("./../controllers/user.controller");

const userRouter = Router();

userRouter.route("/").get(getUsers).post(createUser);

module.exports = { userRouter };
