//importing the event module
const EventEmitter=require("events");
//const { EventEmitter } = require("stream");
const event=new EventEmitter();

var val1=function(mes){
    console.log("function1: "+mes);
}
var val2=function(mes){
    console.log("function2: "+mes);
}
//event.addListener('event2',val1)
event.on('event2',val1);
event.on('event1',val2);
event.emit('event1',"done");


