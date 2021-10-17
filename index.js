const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// set static folder
// app.use(express.static(path.join(__dirname, "public")));
app.use((req,res,next)=>{
  var objDate = new Date();
  var hours = objDate.getHours();
  var day =objDate.getDay();
  if (day==6 ||hours<8||hours>19) {
    res.send("closed")
  } else {
    next()
  }
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
