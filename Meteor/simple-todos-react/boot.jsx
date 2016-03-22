// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code is executed on the client only
  console.log("isClient");

  // Accounts.ui.config({
  //   passwordSignupFields: "USERNAME_ONLY"
  // });
  /*Get data from Server*/
  Meteor.subscribe("tasks");

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App />, document.getElementById("render-target"));
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("isServer");
    // Only publish tasks that are public or belong to the current user
    Meteor.publish("tasks", function () {
      return Tasks.find({
        $or: [
          { private: {$ne: true} },
          { owner: this.userId }
        ]
      });
    });
    // Meteor.publish("tasks", function () {
    //   return Tasks.find();
    // });
  });
}
