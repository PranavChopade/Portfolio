import express from 'express'
const router = express.Router()
import { getUserMessage } from '../controllers/User.js'

router.post("/contact", getUserMessage)

export default router;