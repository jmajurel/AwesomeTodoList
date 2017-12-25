//gray out the clicked task
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//remove task when pressing the delete button
$("ul").on("click", "span", function(ev){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  ev.stopPropagation();
});

//add new todo in the list
$("input[type='text']").keypress( function(ev){
  if(ev.which === 13){
    console.log("enter is pressed!");
    //read text from the textbox
    var todoText = $(this).val();

    //clean up the textbox
    $(this).val("");

    //create new li and add it to the list
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$(".fa-plus").click( function(){
  $("input[type='text']").fadeToggle(); 
});
