const taskOperations={
    tasks:[],
    addTasks(id,name,desc){
        var task=new Task(id,name,desc);
        this.tasks.push(task);
        return task;
    },
    deleteTask(){
        this.tasks = this.tasks.filter(taskObject=>
          !taskObject.isMark)  ;
    },

     toggleMarking(id){
      let taskObject = this.tasks.find(taskObject=>taskObject.id==id);
      taskObject.isMark = !taskObject.isMark;
     },        
    SearchTasks(){

    },
    UpdateTasks(){

    },
    getTasks(){
        return this.tasks;
    },
    getMark(){
        return this.tasks.
        filter(taskObject=>taskObject.isMark==true).length ;
    },
    getUnMark(){
        return this.tasks.length - this.getMark();
    },
    getCount:()=>taskOperations.tasks.length,

}