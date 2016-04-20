Meteor.publish('posts', function(selector) {
  return Posts.find(selector);
});

Meteor.publish('singlePost', function(_id) {
  return Posts.find({_id: _id});
});

Meteor.publish("tasks", function () {
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});
