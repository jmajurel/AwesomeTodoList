var todos = [];
var toDoList = $("#todolist");
var plus = $(".fa-plus"); 
var input = $("input");

input.keypress(function(ev) {
  if(ev.which === 13) {
    var newToDo = $(this).val(); 
    if(newToDo !== "") {
      //add new toDo
      todos.push(newToDo);
      //update toDoList
      updateToDoList(newToDo);
    }
    //reset the text
    $(this).val("");
  }
});

plus.click(function() {
  input.slideToggle("slow");  
});

function updateToDoList(newToDo) {
  var binIcon = '<i class="fa fa-trash-o fa-lg" aria-hidden="true"></i>';
  toDoList.append(binIcon + newToDo);
};

$("#todolist").on("click", "div", function(){
  $(this).toggleClass("done");
});

$("#todolist").on("mouseenter mouseleave", "div", 
  function() {
    $(this).children("i").fadeToggle("slow", "linear");
  }, 
);
