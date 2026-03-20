const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("GigArmor Prototype Backend Running");
});

app.listen(3000, () => {
    console.log("GigArmor backend server started on port 3000");
});
