function* autoIncr(){
    console.log('auto incr');
    var counter = config.autoIncrementStart;
    while(true){
    yield counter;
    counter++;
    }
    }