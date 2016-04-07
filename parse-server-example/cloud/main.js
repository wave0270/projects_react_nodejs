
function auth(){
  return "author wrong";
}
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

//test function for Parse.Cloud
Parse.Cloud.beforeSave("Review", function(request, response) {
  console.log("/*Review*****************************/")
  if (request.object.get("stars") < 1) {
    response.error( auth()+"-you cannot give less than one star");
  } else if (request.object.get("stars") > 5) {
    response.error(auth()+"-you cannot give more than five stars");
  } else {
    //test changes parameters:
    request.object.set("beforeSave", request.object.get("stars")+"...");

    response.success();
  }
});

Parse.Cloud.afterSave("Review", function(request) {
  console.log("/*afterSave*****************************/");
});

Parse.Cloud.beforeDelete("Album", function(request, response) {
  console.log("/*beforeDelete*****************************/");
  // query = new Parse.Query("Photo");
  // query.equalTo("album", request.object.id);
  // query.count({
  //   success: function(count) {
  //     if (count > 0) {
  //       response.error("Can't delete album if it still has photos.");
  //     } else {
  //       response.success();
  //     }
  //   },
  //   error: function(error) {
  //     response.error("Error " + error.code + " : " + error.message + " when getting photo count.");
  //   }
  // });
});

Parse.Cloud.httpRequest({
  method: 'POST',
  url: 'localhost:1338/parse/classes/Review2',
  body: {
    title: 'Vote for Pedro',
    body: 'If you vote for Pedro, your wildest dreams will come true'
  }
}).then(function(httpResponse) {
  console.log(httpResponse.text);
}, function(httpResponse) {
  console.error('Request failed with response code ' + httpResponse.status);
});
