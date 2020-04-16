/**
 * To Do App
 */

$(document).ready(function () {


// sorgente dati 
var todoItems = ['Buy Travel Book', 'Tomatoes'];

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

$('.todo-list').on('click', 'li i:last-child', function() {
    $(this).parent().remove()
});


var lineThrough = $('.todo-element');

// checked todo
$('.todo-list').on('click', 'li', function() {
    $(this).children('.icona').removeClass('far fa-circle');
    $(this).children('.icona').toggleClass('fas fa-check-circle');
    $(this).toggleClass('check');
    
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