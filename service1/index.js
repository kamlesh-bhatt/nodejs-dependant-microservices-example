//importing required dependencies
const express = require("express");
var request = require("request");
const app = express();
const port = 80;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/api", async (req, res) => {
  res.json({
    message: await getReversedString(req.body.message),
    rand: Math.random() //generating random number
  });
});

//function to send post req to service 2
const getReversedString = string =>
  new Promise(resolve => {
    request.post(
      {
        url: "http://servicetwo:8080/reverse",
        json: { message: string }
      },
      (error, response) => {
        if (error) {
          console.log(error);
        }
        resolve(response.body);
      }
    );
  });

app.listen(port, () => console.log(`service1 is running on port ${port}!`)); //running app on port 80
