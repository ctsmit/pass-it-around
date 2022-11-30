const app = require("express")()
const port = 3000

app.get("/", (req, res) => {
   res.send("99 Bottles of beer on the wall, " + "<a>take one down, pass it around</a>")
})








app.listen(port, () => {
   console.log("listen");
})