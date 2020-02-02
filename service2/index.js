//importing required dependencies
const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/reverse", (req, res) => {
  res.send(reverseString(req.body.message));
});

//function to reverse the string
function reverseString(str) {
  var splitString = str.split(""); // split the string with "" e.g me to "m" "e"
  var reverseString = splitString.reverse(); // using the default reverse method
  var reversedString = reverseString.join("");
  return reversedString; //returing back the response
}

app.listen(port, () => console.log(`service2 is running on port ${port}!`)); //running app on port 8080
