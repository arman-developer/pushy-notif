const express = require("express");
var Pushy = require("pushy");
var app = express();
app.set("view engine", "ejs");
app.use("/", express.static("public"));
const notifList = [];

var pushyAPI = new Pushy(
  "7f1ce85848a1b8b07888d6bf22ab085bec2079e36d20540d05c18a29e5ff0d61"
);

// Set push payload data to deliver to device(s)
var data = {
  message: "Hello World!",
};

// Insert target device token(s) here
// var to = ["DEVICE_TOKEN"];

// Set optional push notification options (such as iOS notification fields)
var options = {
  notification: {
    title: "Test Notification",
    body: "Hello World \u270c",
  },
};

function senderr(to) {
  pushyAPI.sendPushNotification(data, to, options, function (err, id) {
    // Log errors to console
    if (err) {
      return console.log("Fatal Error", err);
    }

    // Log success
    console.log("Push sent successfully! (ID: " + JSON.stringify(id) + ")");
  });
}

app.get("/get", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/get/:getId", (req, res) => {
  console.log(req.params.getId);
  notifList.push(req.params.getId);
  senderr(req.params.getId);
  res.json({ foo: req.params.getId });
});

app.listen(3000, () => {
  console.log(3000);
});
