
function auth(){
  return "author wrong";
}
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

//test function for Parse.Cloud
Parse.Cloud.beforeSave("Review", function(request, response) {
  console.log("/*beforeSave*****************************/")
  if (request.object.get("stars") < 1) {
    response.error( auth()+"-you cannot give less than one star");
  } else if (request.object.get("stars") > 5) {
    response.error(auth()+"-you cannot give more than five stars");
  } else {
    //test changes parameters:
    request.object.set("beforeSave", request.object.get("stars")+"...");
    //call query parse:
    query = new Parse.Query("Review");
    query.equalTo("stars", 1);
    query.find({
      success: function(results) {
        // results is an array of Parse.Object.
        console.log(JSON.parse(JSON.stringify(results)))
      },
      error: function(error) {
        // error is an instance of Parse.Error.
        console.log(JSON.parse(JSON.stringify(error)))
      }
    });

    query.count({
    success: function(number) {
        // There are number instances of MyClass.
        console.log("Total Instances: "+number);
    },
    error: function(error) {
        // error is an instance of Parse.Error.
        console.log("Parse error");
        }
    });
    response.success();
  }
});

Parse.Cloud.beforeDelete("Review", function(request, response) {
  console.log("/*beforeDelete*****************************/");

});

Parse.Cloud.afterSave("Review", function(request) {
  console.log("/*afterSave*****************************/");
});

Parse.Cloud.afterDelete('Review', function(request) {
  console.log("/*afterDelete*****************************/");
    // code here
  })

/**********************/
Parse.Cloud.beforeSave("UserTB", function(request, response) {
  // console.log("/*beforeSave: User*****************************/");
  // console.log(request)
  // console.log('request.object=========================')
  // console.log(request.object.id)
  response.success();
});
Parse.Cloud.afterSave("UserTB", function(request, response) {
  console.log("/*afterSave: User*****************************/");
  console.log(request)
  console.log("response")
  console.log(response)
  /*return full object after save*/
  query = new Parse.Query("UserTB");
  query.equalTo( 'objectId', request.object.id )
  query.find({
    success: function(object) {
      console.log('query seccess=========================')
      console.log(JSON.parse(JSON.stringify(object)))
      response.success(object);
    },
    error: function(object, error) {
      console.log('query error=========================')
      console.log(error)
      response.error();
    }
  });
  /*End*/

});
