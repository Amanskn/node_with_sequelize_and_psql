const { Router } = require("express");
const {
  createAUser,
  getAUser,
  getAllUsers,
  updateAUser,
  deleteAUser,
} = require("./../controllers/user.controllers");

const userRouter = Router();

userRouter.route("/").get(getAllUsers).post(createAUser);
userRouter.route("/:id").get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = { userRouter };
