Pushy.register({ appId: "62ff8a4093f5cb0c5f0c4709" })
  .then(function (deviceToken) {
    // Print device token to console
    console.log("Pushy device token: " + deviceToken);

    // Send the token to your backend server via an HTTP GET request
    fetch("/get/" + deviceToken)
      .then((ttt) => {
        return ttt.json();
      })
      .then((rrr) => {
        console.log(rrr);
      });

    // Succeeded, optionally do something to alert the user
  })
  .catch(function (err) {
    // Handle registration errors
    console.error(err);
  });

if ("serviceWorker" in navigator) {
  console.log("*************");
  navigator.serviceWorker.register("service-worker.js");
}
