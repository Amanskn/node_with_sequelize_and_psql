const { Router } = require("express");
const { userRouter } = require("./user.routes");
const centralRouter = Router();

centralRouter.use("/user", userRouter);

module.exports = { centralRouter };
