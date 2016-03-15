// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code is executed on the client only
  console.log("isClient");
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  console.log("isServer");
    // code to run on server at startup
  });
}
