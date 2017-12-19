var todos = [];
var toDoList = $("#todolist");
var plus = $(".fa-plus"); 
var input = $("input");
var binIcon = '<i class="fa fa-trash-o" aria-hidden="true"></i>';

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
  toDoList.append("<li>" + binIcon + newToDo + "</li>");
};

$("#todolist").on("click", "li", function(){
  console.log("clicked");
  $(this).toggleClass("done");
});

$("#todolist").on("mouseenter", "li", 
  function() {
    console.log("event fired");
    $("i").fadeToggle("fast", "linear");
  }, 
);
$("#todolist").on("mouseleave", "li",
  function() {
    console.log("mouse leave");
    $("i").fadeToggle("fast", "linear");
  }
);
