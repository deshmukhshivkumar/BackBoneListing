
function getBooking(apiUrl, apiKey){
	
	$.ajax({
		type: 'GET',
		url: apiUrl,
		headers : {
			"x-api-key": apiKey,
			"Content-Type": "application/json"
		},
		success :
			function(response){
				return response;
			},
		error:
			function(error){
				return error;
			}
	});
}