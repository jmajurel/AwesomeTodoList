console.log("connected!");

var todos = [];
var toDoList = $("#todolist");
var toDo = $("input");

$(".fa-plus").click(function(){
  console.log("click");
  var newToDo = toDo.text();
  if(newToDo != "") {
    //add new toDo
    todos.push(newToDo);
    //update toDoList
    updateToDoList(newToDo);
  }
});

function updateToDoList(newToDo) {
  toDoList.append("<li>" + newToDo + "<li>");
};

