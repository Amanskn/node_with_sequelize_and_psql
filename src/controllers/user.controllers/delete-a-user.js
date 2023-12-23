const { User } = require("./../../models/user.model");

// ===================This is the controller action for deleting a particular user from the database
module.exports.deleteAUser = async (req, res) => {
  try {
    // console.log("Inside try of deleteAUser");
    const userId = req.params.id;
    const rowsDeleted = await User.destroy({
      where: {
        id: userId,
      },
    });

    // Check if the user was deleted
    if (rowsDeleted > 0) {
      res.status(200).json({
        status: "success",
        msg: "User deleted successfully",
      });
    } else {
      res.status(404).json({
        status: "error",
        msg: "No user deleted because No User found with the provided id",
      });
    }
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};
