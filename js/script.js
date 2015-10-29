/*Function to add items*/
function addItem() {
	var itemValue = $('#task').val();
	var row = $('<li><button class="check"></button><span class="item">' + itemValue + '</span><button class="delete"></button></li>');
	$('.list').append(row);
}	
/*Function to check off items*/
function checkItem() {
	$(this).parent().toggleClass('checked-item');
}

/*Function to delete items*/
function deleteItem() {
	$(this).parent().remove();
}

/*Function to reset list*/
function clearList() {
	$('.list').empty();
}

/*Function to clear input after each item*/
function resetForm() {
	$('#task').val('');
}

$(document).ready(function() {
	/*on click of the add to list button id add-button action add item */
	$('#add').on('click', addItem);
	
	
	/*on click of the reset list button id startover action reset list */
	$('.reset').on('click', clearList);

});
	/*On click check button, cross off the list item*/
$(document).on('click', '.check', checkItem);
	/*On click check button, delete list item*/
$(document).on('click', '.delete', deleteItem);

$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            addItem();
            resetForm();
        } 
});