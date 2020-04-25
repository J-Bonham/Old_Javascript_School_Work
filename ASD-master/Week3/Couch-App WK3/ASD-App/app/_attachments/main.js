$(document).ready(function() {
	$.ajax({
		"url":"_view/Movie",
		"dataType":"json",
		"success": function(data) {
		console.log(data)
			$.each(data.rows, function(index, movie) {
				var title = movie.value.title;
				var name = movie.value.name;
				var date = movie.value.date;
				var loantime = movie.value.loantime;
				var reminder = movie.value.reminder;
				$('#browsemovielist').append(
				$('<li>').append(
				$('<a>').attr("href", "#").text(title)));
				});
		$('#browsemovielist').listview('refresh');	
		}
	});
	$.ajax({
		"url":"_view/Book",
		"dataType":"json",
		"success": function(data) {
		console.log(data)
			$.each(data.rows, function(index, book) {
				var title = book.value.title;
				var name = book.value.name;
				var date = book.value.date;
				var loantime = book.value.loantime;
				var reminder = book.value.reminder;
				$('#browsebooklist').append(
				$('<li>').append(
				$('<a>').attr("href", "#").text(title)));
				});
		$('#browsebooklist').listview('refresh');	
		}
	});
	
	$.ajax({
		"url":"_view/Game",
		"dataType":"json",
		"success": function(data) {
		console.log(data)
			$.each(data.rows, function(index, game) {
				var title = game.value.title;
				var name = game.value.name;
				var date = game.value.date;
				var loantime = game.value.loantime;
				var reminder = game.value.reminder;
				$('#browsegamelist').append(
				$('<li>').append(
				$('<a>').attr("href", "#").text(title)));
				});
		$('#browsegamelist').listview('refresh');	
		}
	});
	
	$.ajax({
		"url":"_view/All",
		"dataType":"json",
		"success": function(data) {
		console.log(data)
			$.each(data.rows, function(index, all) {
				var title = all.value.title;
				var name = all.value.name;
				var date = all.value.date;
				var loantime = all.value.loantime;
				var reminder = all.value.reminder;
				$('#browsealllist').append(
				$('<li>').append(
				$('<a>').attr("href", "#").text(title)));
				});
		$('#browsealllist').listview('refresh');	
		}
	});
	
	
	
	
	
	
	
	});
