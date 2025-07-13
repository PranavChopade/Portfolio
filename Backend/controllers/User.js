import User from '../Model/UserModel.js'

// export const readDB = async (req, res) => {
//   try {
//     const existingUsers = await User.find();

//     if (existingUsers.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "Users Not Found"
//       });
//     }

//     res.status(200).json({
//       success: true,
//       users: existingUsers
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error retrieving users",
//       error: error.message
//     });
//   }
// };


export const getUserMessage = async (req, res) => {
  const { name, email, message } = req.body;
  const newUser = new User({ name, email, message })
  await newUser.save()
  if (!newUser) {
    return res.status(401).json({
      success: false,
      message: "failed to get User message"
    })
  }
  res.status(200).json({
    success: true,
    message: "new user created successfully",
    newUser
  })
}

// export const deleteUser = async (req, res) => {
//   const { id } = req.params
//   const deletedUser = await User.findByIdAndDelete(id)

//   if (!deletedUser) {
//     return res.status(401).json({
//       success: false,
//       message: "unable to delete user"
//     })
//   }

//   res.status(200).json({
//     success: true,
//     message: "user has been deleted successfully",
//     deletedUser
//   })
// }

// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params
//     const { name } = req.body;
//     const updatedUser = await User.findByIdAndUpdate(id, { name }, { new: true })

//     if (!updatedUser) {
//       res.status(404).json({
//         success: false,
//         message: "no user found with the provided id"
//       })
//     }
//     res.status(200).json({
//       success: true,
//       message: "user updated successfully",
//       user: updatedUser
//     })
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "data updation failed",
//       error: error.message
//     })
//   }
// }