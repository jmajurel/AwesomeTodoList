var todos = [];
var toDoList = $("#todolist");
var plus = $(".fa-plus"); 
var input = $("input");
var binIcon = '<i class="fa fa-trash-o fa-2x" aria-hidden="true"></i>';

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
  toDoList.append( "<li>" + binIcon + " " + newToDo + "</li>");
};

$("#todolist").on("click", "li", function(){
  $(this).toggleClass("done");
});

$("#todolist").on("mouseenter mouseleave", "li", 
  function() {
    $(this).children("i").fadeToggle("medium", "linear");
  }, 
);
