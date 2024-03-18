import express from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
    return res.json({message: "it's working..."});
})
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));