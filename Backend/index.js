import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 4000
const URI = process.env.MONGODBURI


mongoose.connect(URI)  
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)


app.listen(4001, () => {
  console.log("Server is listening on port 4001");
});
