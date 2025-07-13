import express from 'express'
const router = express.Router()
import { getUserMessage } from '../controllers/User.js'

router.post("/contact", getUserMessage)
// router.get("/users", readDB)
// router.delete("/users/:id", deleteUser)
// router.put("/users/:id", updateUser)

export default router;