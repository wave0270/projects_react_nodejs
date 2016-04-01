/*create Mongo data*/
Posts = new Mongo.Collection('posts');
if(Meteor.isServer) {
  console.log("init Posts")
  // Posts.remove({});
  Posts.insert({_id: 'one', title: 'New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'});
  Posts.insert({_id: 'two', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
  Posts.insert({_id: 'three', title: 'My Secret Post', category: 'private'});
  Posts.insert({_id: 'four', title: 'MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
}
