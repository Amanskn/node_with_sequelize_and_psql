const { Router } = require("express");
const {
  createUser,
  getUsers,
  getAUser,
  updateAUser,
  deleteAUser,
} = require("./../controllers/user.controller");

const userRouter = Router();

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:id").get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = { userRouter };
