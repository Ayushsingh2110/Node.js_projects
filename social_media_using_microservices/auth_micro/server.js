import express from "express";
import cors from "cors";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

/* Routes */
import Routes from "./routes/indexRoutes.js";
app.use("/api", Routes);

app.get("/", (req, res) => {
    return res.json({message: "it's working..."});
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));