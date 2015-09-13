$(document).ready(function(){
	// VARIABLES 
	var listTotal = 0;
	var listCheck = 0;
	var listUncheck = 0;

	var updateCount = function () {
		listUncheck = $('.unchecked').length;
		listCheck = $('.checked').length;
		$('#done').text(listCheck);
		$('#do').text(listUncheck);
		$('#total').text(listCheck + listUncheck);
	}

	// MAKES LIST SORTABLE
	$('#list').sortable();

	// DELETES LIST ITEM
		//.closest busca el elemento más cercano con el identificador especificado, es diferente a .parent que va directamente a la etiqueta superior sin importar el tipo.
	$(document).on('click', '.delete', function(){
		$(this).closest('.item').remove();
		updateCount();
	});

	// Para el estado de marcado del artículo de la lista.
	$(document).on('click', '.glyphicon-unchecked', function(){
		$(this).removeClass('glyphicon-unchecked').addClass('glyphicon-check');
		$(this).closest('.item').removeClass('unchecked').addClass('checked');
		updateCount();
	});

	$(document).on('click', '.glyphicon-check', function(){
		$(this).removeClass('glyphicon-check').addClass('glyphicon-unchecked');
		$(this).closest('.item').removeClass('checked').addClass('unchecked');
		updateCount();
	});

	$(document).on('submit', 'form', function(){
		var listItem = $('#newItem').val();
		if (listItem.length > 0) {
			$('#list').append('<li class="item unchecked"><span><span class="glyphicon glyphicon-unchecked"></span> ' + listItem + '</span><div class="delete"><span class="glyphicon glyphicon-remove"></span></div></li>');
			$('#newItem').val('');
			listUncheck = $('.unchecked').length;
			$('#do').text(listUncheck);
			$('#total').text(listCheck + listUncheck);
			$('#newItem').blur();
			return false;
		} else {
			$('#newItem').blur();
			return false;
		}
	});

});