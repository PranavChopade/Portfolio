import User from '../Model/UserModel.js'

export const getUserMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newUser = new User({ name, email, message })
    const savedUser = await newUser.save()
    if (!savedUser) {
      return res.status(404).json({
        success: false,
        message: "failed to post message"
      })
    }
    res.status(200).json({
      success: true,
      message: "message sent successfully",
      data: savedUser
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error"
    })
  }
}