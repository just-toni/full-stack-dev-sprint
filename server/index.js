import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected successfully")).catch(
    (err) => console.error("Could connect to database ... try again", err)
);

app.use(express)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});