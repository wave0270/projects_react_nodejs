module.exports = {

  //validate menu
  validateMenu: function(object) {
    // name of model
    var modelName=object.modelName;
    // request
    var req  =object.req;
    //response
    var res  =object.res;
    // model
    var model=req.object.toJSON();
    //check validate
    if(model.name && model.name==="error"){
      res.error('Name invalid.');
    }else{
      res.success();
    }

  },

  //validate style
  validateStyle: function(object) {
    console.log("validateStyle");
    // name of model
    var modelName=object.modelName;
    // request
    var req  =object.req;
    //response
    var res  =object.res;
    // model
    var model=req.object.toJSON();
    //check validate
    if(model.name && model.name==="error"){
      res.error('Name invalid.');
    }else{
      res.success();
    }
  },

  //validate setting
  validateSetting: function(object) {
    console.log("validateSetting");
    // name of model
    var modelName=object.modelName;
    // request
    var req  =object.req;
    //response
    var res  =object.res;
    // model
    var model=req.object.toJSON();
    //check validate
    if(model.name && model.name==="error"){
      res.error('Name invalid.');
    }else{
      res.success();
    }
  }

};
