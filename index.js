var git = require('simple-git')();

git.status(function(err, msg){
  if(err) return 1;
  console.log(msg)
});
