/**
 * To Do App
 */

$(document).ready(function () {


// sorgente dati 
var todoItems = ['fare la spesa', 'pagare luce'];

//refs todo-list
var list = $('.todo-list'); //lista to do
var input = $('.add-todo'); //input ref

// itero sull'array per riempire la mia lista
for (var i = 0; i < todoItems.length; i++) {
    //  template clone
     var elementList = $('.template li').clone();
    //  add text template dall'array
    elementList.prepend(todoItems[i]);
    // add clone in the todo-list
    list.append(elementList); 
}

// rimuovo il todo cliccando delete

$('.todo-list').on('click', 'li i', function() {
    $(this).parent().remove()
});


// add new item todo-list from input
input.keyup(function(event){
    console.log(event.which);


    if(event.which == 13 || event.keycode == 13 ) {
        var text = input.val().trim(); 
        console.log(text);
        
        if (text !== '') {
            var newElementList = $('.template li').clone();
            newElementList.prepend(text);
            list.append(newElementList);

            // clear input
            input.val('');
        }
    }
    
});


}); // <-- end ready