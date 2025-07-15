import User from '../Model/UserModel.js'

export const getUserMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newUser = new User({ name, email, message })
    await newUser.save()
    if (!newUser) {
      return res.status(404).json({
        success: false,
        message: "failed to post message"
      })
    }
    res.status(200).json({
      success: true,
      message: "message sent successfully",
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error"
    })
  }
}