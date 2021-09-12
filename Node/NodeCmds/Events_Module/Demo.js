// for writting eventDriven codes like -- chat application
const events = require("events");

// create instance of evenemitter
const eventEmitter = new events.EventEmitter();

// register/or add listener to your event - on,once
eventEmitter.on("openConnection", () => {
  console.log("connection is opened");
});

// multiple listeners can be associated to an event
eventEmitter.on('openConnection',fn);

// asociated event
function fn(){
  console.log('I am second');
}

// trigger the event or call it using eventEmitter
eventEmitter.emit("openConnection");

// you can also pass argument to your event and use it
eventEmitter.on("closeConnection", (data) => {
  console.log("connection is closed", data);
});

// pass the argument as second argument
eventEmitter.emit("closeConnection", true);



// to deregister your event use removeListener method of event Emitter
// eventEmitter.removeListener("openConnection");
// OR
eventEmitter.off("openConnection",()=>{console.log('Connection is closed.')});

// to change the max number of events associated with a listener
eventEmitter.setMaxListeners(20);
console.log(events.EventEmitter.defaultMaxListeners);