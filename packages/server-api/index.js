const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Server is running.")
})

app.listen(port, err => {
    if (err)
        console.log("Error:")
    else
        console.log(`Server is running on port : ${port}`)
})
