FlowRouter.route("/", {
  subscriptions: function() {
    var selector = {category: {$ne: "private"}};
    this.register('posts', Meteor.subscribe('posts', selector));
  },
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <PostList />
    });
  }
});

FlowRouter.route("/cycle", {
  subscriptions: function() {
    var selector = {category: {$ne: "private"}};
    selector = {};
    this.register('posts', Meteor.subscribe('posts', selector));
  },
  action: function() {
    console.log("/cycle")
    ReactLayout.render(MainLayout, {
      content: <ReactCycle />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  subscriptions: function(params) {
    this.register('singlePost', Meteor.subscribe('singlePost', params._id));
  },
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <PostPage _id={params._id} />
    });
  }
});

FlowRouter.route("/tasks", {
  subscriptions: function() {
    this.register('posts', Meteor.subscribe("posts"));
  },
  action: function() {
    console.log("/tasks")
    ReactLayout.render(MainLayout, {
      content: <App />
    });
  }
});
