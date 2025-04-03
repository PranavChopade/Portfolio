import express from 'express'
import dotenv from 'dotenv'
import router from './Routes/route.js';
import connectDB from './Config/db.js';

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;
connectDB()
app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})