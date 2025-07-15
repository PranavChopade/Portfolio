export const getUserMessage = async (req, res) => {

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json(
        {
          success: false, message: "All fields are required"
        }
      );
    }

    res.status(200).json({
      success: true,
      message: "Data received ✅",
      data: { name, email, message }
    });

  } catch (error) {
    console.error("❌ Unexpected Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
