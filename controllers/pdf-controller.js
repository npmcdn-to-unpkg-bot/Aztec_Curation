var waitTime = 5000;
var stripAnsi = require('strip-ansi');
function Uploader(){
	var self = this; 
	self.upload = function(req, res){ self._upload(self, req, res); };
}

Uploader.prototype._upload = function(self, req, res){

  // setTimeout(function(){},waitTime);

  if(req.file){
  	var exec = require('child_process').exec;
  	var puts = ""; 
  	const execFile = require('child_process').execFile;
	const child = execFile('bash', ['/Users/davidmeng/Desktop/Aztec_Curation/slots-extraction/scripts/getting_started.sh'], (error, stdout, stderr) => {
  if (error) {
    // console.log(error);
  }
    // var output = JSON.stringify(stdout);
    // output = JSON.parse(output);
    var a = JSON.stringify(stripAnsi(stdout), null, 3);
      console.log(a);
    res.json(JSON.parse(a));

    //  {"name": "This file is completed",
    // "authors": ["John Doe", "Jane Doe"],
    // "source_code": "github.com/test",
    // "keywords": ["word1", "word2", "word3"],
    // "funding": ["funding1", "funding2"]
    // }

});
	// exec("~/slots-extraction/scripts/getting_started.sh", puts);
	// console.log("The scripts running now ");
	// console.log(puts);
  }	

  



};

module.exports = new Uploader();