const app = require("express")()
const port = 3000

app.get("/", (req, res) => {
   res.send("99 little bugs in the code<br> 99 little bugs <br> <a href = '/98'>take one down<br> patch it around</a>")
})

app.get("/0", (req, res) => {
   res.send("0 bugs? no way<br> <a href = '/'>start over?</a>")
})

app.get("/:numberOfBottles", (req, res) => {
   let randomNumberOfBottles = Math.floor(Math.random() * 11)
   let newBottles = Number(req.params.numberOfBottles)

   if (randomNumberOfBottles<10) {
      newBottles--
   } else {
      newBottles += randomNumberOfBottles - Math.floor(Math.random() * 5)
   }
   
   res.send(req.params.numberOfBottles + " little bugs in the code<br>" + req.params.numberOfBottles + " little bugs<br> <a href = '" + newBottles + "'>take one down<br> patch it around</a>")
})



app.listen(port, () => {
   console.log("listen");
})