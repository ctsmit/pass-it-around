const app = require("express")()
const port = 3000

app.get("/", (req, res) => {
   res.send("99 Bottles of beer on the wall, " + "<a href = '/98'>take one down, pass it around</a>")
})

app.get("/0", (req, res) => {
   res.send("0 Bottles of beer on the wall, " + "<a href = '/'>start over?</a>")
})

app.get("/:numberOfBottles", (req, res) => {
   res.send(req.params.numberOfBottles + " Bottles of beer on the wall, <a href = '" + (req.params.numberOfBottles-1)+ "'>take one down, pass it around</a>")
})









app.listen(port, () => {
   console.log("listen");
})