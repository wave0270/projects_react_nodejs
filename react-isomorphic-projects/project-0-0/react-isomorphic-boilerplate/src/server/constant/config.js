
module.exports = {
	port: 8080,
  domain: "localhost",
  prefix: "http://",
  getFullDomain: function(){
    return this.prefix+this.domain+":"+this.port;
  }
}
