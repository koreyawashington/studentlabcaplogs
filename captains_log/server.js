const express = require('express')
const app = express()
const port = 3000
//*  setting the views
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* body parser
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 //new route
app.get("/new", (req, res) => {
    res.render("New");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})