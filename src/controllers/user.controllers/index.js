const { createAUser } = require("./create-user");
const { getAUser } = require("./get-a-user");
const { getAllUsers } = require("./get-all-user");
const { updateAUser } = require("./update-a-user");
const { deleteAUser } = require("./delete-a-user");

module.exports = {
  createAUser,
  getAUser,
  getAllUsers,
  updateAUser,
  deleteAUser,
};
