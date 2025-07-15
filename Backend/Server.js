import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './Routes/route.js';
import connectDB from './Config/db.js';

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000;

connectDB()
app.use(cors({
  origin: [
    'https://pranavchopade-portfolio.netlify.app',
    'http://localhost:5173'
  ],
  methods: ['POST', 'OPTIONS']
}));

app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})