const { User } = require("./../../models/user.model");

// ====================This is the method to fetch all the users from the database
module.exports.getAllUsers = async (req, res) => {
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
