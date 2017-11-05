$(`#load-chapter2-link`).on(`click`, function () {
	$.ajax({
		url: `chapter2.html`,
		success: function (data) {
			$(`#loading-controls`).remove();
			$(`body`).append(data);
		},
		error: function (jqXHR, status, errorMessage) {
			var message = `<div>Sorry, an error occurred: ${status}, "${errorMessage}"</div>`;
			$(`#loading-controls`).append(message);
		},
	});
});
