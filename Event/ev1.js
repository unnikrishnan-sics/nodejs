var events = require("events");
var em = new events();
console.log("before event");
em.on('FristEvent',function(data){
    console.log("first"+data);
});
em.emit('FirstEvent',"this is a ev emitr exmpl");