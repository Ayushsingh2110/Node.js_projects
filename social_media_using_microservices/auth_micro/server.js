import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get("/", (req, res) => {
    return res.json({message: "it's working..."});
})
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));