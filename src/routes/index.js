const { Router } = require("express");
const { userRouter } = require("./user.routes");
const centralRouter = Router();

centralRouter.use("/users", userRouter);

module.exports = { centralRouter };
