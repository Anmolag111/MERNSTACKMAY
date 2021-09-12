window.addEventListener('load',init);
var iterator;
function init(){
    iterator = autoIncr();
   console.log( printTaskId());
   console.log(document.querySelector('#taskid').value);
    bindEvents();
    updateCount();
}
const printTaskId=()=>
    document.querySelector('#taskid').value
    = iterator.next().value;

function bindEvents(){
    document.querySelector('#add').addEventListener('click',addNewTask);
    document.querySelector('#delete').addEventListener('click',deleteTask);
}
function deleteTask(){
    taskOperations.deleteTask();
    document.querySelector('#tasks').innerHTML = '';
    let tasks = taskOperations.getTasks();
    tasks.forEach(taskObject=>print(taskObject));
    updateCount();
}
function addNewTask(){
    var id = document.querySelector('#taskid').innerText;
    var name = document.querySelector('#taskname').value;
    var descr = document.querySelector('#descr').value;
    var task= taskOperations.addTasks(id,name,descr);
    print(task);
    updateCount();
}
function print(task){
    console.log(task);
    var tbody=document.querySelector('#tasks')
    var tr=tbody.insertRow();
    var index=0;
    for(let key in task){
        if(key=='isMark'){
            continue;
        }
        tr.insertCell(index).innerText=task[key];
        index++;
    }
    let currentId = task.id;
    let td = tr.insertCell(index);
    td.appendChild(createIcon(config.path.icons.edit,edit, currentId));
    td.appendChild(createIcon(config.path.icons.trash,toggleMark, currentId));
}
function edit(){
var id=this.getAttribute('tid');
console.log('Edit call')
}
function toggleMark(){
    var id = this.getAttribute('tid');
    let iTag = this;
    let tr = iTag.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    console.log('Toggle Mark Call ',id);
    taskOperations.toggleMarking(id);
    updateCount();  
}
function updateCount(){
    document.querySelector('#total').innerText = taskOperations.getCount();
    document.querySelector('#mark').innerText= taskOperations.getMark();
    document.querySelector('#unmark').innerText = taskOperations.getUnMark();
}

function createIcon(className, fn, currentId){
    let image = document.createElement('i');
    image.classList.add('hand');
    image.classList.add(config.path.icons.base);

    image.classList.add(className);
    image.classList.add(config.path.icons.margin);
    image.addEventListener('click',fn);
    image.setAttribute('tid',currentId);
    return image;
}