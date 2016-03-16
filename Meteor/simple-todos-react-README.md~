https://www.meteor.com/tutorials/react/creating-an-app

Steps:
1.
meteor add react

2.
//command line:
meteor mongo
db.tasks.insert({ text: "Hello world!", createdAt: new Date() });
//javascript:
Tasks = new Mongo.Collection("tasks");
Tasks.insert({ text: "Hello world!", createdAt: new Date() });
Tasks.find({}, {sort: {createdAt: -1}}).fetch();
Tasks.update(this.props.task._id, {
      $set: {checked: ! this.props.task.checked}
    });
Tasks.remove(this.props.task._id);

3.add package:
meteor add accounts-ui
meteor add accounts-password

4.remove insecure. not allow user update data at client
meteor remove insecure
5.autopublish package, which automatically synchronizes all of the database contents to the client. Let's remove it and see what happens:
meteor remove autopublish
