import User from '../Model/UserModel.js'


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
    message: "message received successfully",
  })
}
