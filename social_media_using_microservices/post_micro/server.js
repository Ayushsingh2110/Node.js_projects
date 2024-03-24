import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", (req, res) => {
    return res.json({ message: "post micro is running"})
})

app.listen(process.env.PORT || 5502, () => console.log(`server is running on port ${process.env.PORT || 5502}`) );