import express from "express";
const PORT = 3000
const app = express()

app.get("/", (req, res) => {
    return res.send("hello wrld")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})