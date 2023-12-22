const { User } = require("./../models/user.model");

// ==========================This is the controller for creating a new user in the database
const createUser = async (req, res) => {
  try {
    // console.log("Inside try of createUser");
    const aman = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });
    // console.log("@@@@ this is aman:-", aman.dataValues === aman.toJSON()); // Don't do this
    // console.log("@@@@ this is aman.toJSON:-", aman.toJSON()); // This is good!
    // console.log(
    //   "@@@@ this is aman.JSON.stringify():-",
    //   typeof JSON.stringify(aman, null, 4)
    // );
    res.status(201).json({
      status: "success",
      msg: "user created successfully",
    });
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};

// ====================This is the method to fetch all the users from the database
const getUsers = async (req, res) => {
  try {
    // console.log("Inside try of getUsers")
    const allUsers = await User.findAll();
    res.status(200).json({
      status: "success",
      totalUsers: allUsers.length,
      data: allUsers,
    });
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};

// ========================This is the controller action to fetch a particular user from the database
const getAUser = async (req, res) => {
  try {
    // console.log("Inside try of getUsers")
    const userId = req.params.id;
    // const requiredUser = await User.findByPk(userId);
    const requiredUser = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (requiredUser) {
      res.status(200).json({
        status: "success",
        data: requiredUser,
      });
    } else {
      res.status(404).json({
        status: "error",
        msg: "No User found with the provided id",
      });
    }
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};

// ===================This is the controller action for updating a particular user in the database
const updateAUser = async (req, res) => {
  try {
    console.log("Inside try of updateAUser");
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

// ===================This is the controller action for deleting a particular user from the database
const deleteAUser = async (req, res) => {
  try {
    console.log("Inside try of deleteAUser");
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

module.exports = {
  createUser,
  getUsers,
  getAUser,
  updateAUser,
  deleteAUser,
};
