var db = require("../lib/db");

db.constr = "postgres://cloudbeer:zhwell@10.163.11.20:5432/ypassport";

var x = db.count("account");
x.next().value(function(err, body){
    console.log(body);
});


//x.next(function(err, body){
//    console.log(body);
//});
//var step1 = x.next().value(function(err, body){
//    console.log(0);
//});
//console.log(step1);

//var step2 = x.next();

//(function(err, body){
//    console.log(body);
//
//});

//res.value(function(err, body){
//    console.log(body);
//
//});


//
//function* love(){
//    var res = yield db.count("account");
//    console.log(res);
//}
//
//love().next();