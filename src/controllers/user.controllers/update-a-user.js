const { User } = require("./../../models/user.model");

// ===================This is the controller action for updating a particular user in the database
module.exports.updateAUser = async (req, res) => {
  try {
    // console.log("Inside try of updateAUser");
    const userId = req.params.id;
    const [rowsUpdated] = await User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        // Add other attributes to update as needed
      },
      {
        where: {
          id: userId,
        },
      }
    );

    // Check if the user was updated
    if (rowsUpdated > 0) {
      // Fetch the updated user
      const updatedUser = await User.findOne({
        where: {
          id: userId,
        },
      });

      res.status(200).json({
        status: "success",
        msg: "User updated successfully",
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        status: "error",
        msg: "No user updated because No User found with the provided id",
      });
    }
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};
