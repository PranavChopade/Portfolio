import express from 'express'
const router = express.Router()
import { getUserMessage, readDB, deleteUser, updateUser } from '../controllers/User.js'

router.get("/users", readDB)
router.post("/users", getUserMessage)
router.delete("/users/:id", deleteUser)
router.put("/users/:id", updateUser)

export default router;