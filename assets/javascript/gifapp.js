console.log("javascript is linked");

var topicsArray = ["Jurassic Park","The Mask", "Talladega Nights", "Anchorman","Bruce Almighty","Superbad","21 Jumpstreet", "WaterBoy", "Happy Gilmore", "Horrible Bosses"];

 $(document).ready(function(){
             if (jQuery) {  
               // jQuery is loaded  
               console.log("Yeah!");
             } else {
               // jQuery is not loaded
              console.log("Doesn't Work");
             }
             buttonFill();
             searchbarArrayPusher();
             $(document).on('click', ".topicButton",apiCaller);
             $(document).on("click", ".animateGif",gifClickAnimate);
             $(".animateGif").on("click",function(){
					var state =(this).attr("data-state");

					if(state === "still"){
						$(this).attr("src",$(this).attr('data-animate'));
						$(this).attr("data-state",("animate"));
					}else{
						$(this).attr("src",$(this).attr("data-still"));
						$(this).attr("data-state","still");
					}
				});
         	 });
//array with startup buttons

//button rendering funtion
function buttonFill(){
	$("#buttonSpace").empty();

	for (i=0;i<topicsArray.length;i++){
		var buttonCreate = $('<button>');

		buttonCreate.addClass("btn btn-default topicButton");
		buttonCreate.attr("data-Giphy",topicsArray[i]);
		console.log(buttonCreate);
		buttonCreate.text(topicsArray[i]);
		$("#buttonSpace").append(buttonCreate);
	}
}
//build the api url and with reference to the array
function apiCaller(){
	var searchTopic = $(this).attr("data-Giphy");
	var queryURL= "https://api.giphy.com/v1/gifs/search?api_key=a0016b43bb05415d883b051cc36af24c&q="+searchTopic+"&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response){
		$('#gifSpace').empty();
		var results = response.data;
		console.log(response);

		for (var j=0; j<results.length;j++){
			var gifDiv= $('<div>"');
			
			var gifRating= results[j].rating;
			console.log(gifRating);

			var ratingLabel = $('<p>');
			ratingLabel.text("Rating: "+gifRating);
			
			var gifIMG = $('<img>');
			gifIMG.addClass("animateGif")
			gifIMG.attr("src",results[j].images.fixed_height.url);
			gifIMG.attr("data-still",results[j].images.fixed_height_still.url);
			gifIMG.attr("data-animate",results[j].images.fixed_height.url);
			gifIMG.attr("data-state","still");

			console.log(results[j].images.fixed_height.url);
			
			gifDiv.append(ratingLabel.css({"color":"white", "font-weight":"bold", "text-shadow":"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"}));
			gifDiv.append(gifIMG);
			$("#gifSpace").prepend(gifDiv);

		}
	})
};
//functions for pushing data from the search bar to the topicsArray
function searchbarArrayPusher(){
	$('#searchPush').on('click',function(event){
		var newBtnTopic = $('#topicInput').val().trim();
		console.log(newBtnTopic);
		topicsArray.push(newBtnTopic);
		console.log(topicsArray);
		buttonFill();
		$('#topicInput').val("");
	})
};
//click functions for gifs to start and stop
/*function gifAnimator(){
	$(".animateGif").on("click",function(){
		var state =(this).attr("data-state");

		if(state === "still"){
			$(this).attr("src",$(this).attr('data-animate'));
			$(this).attr("data-state",("animate"));
		}else{
			$(this).attr("src",$(this).attr("data-still"));
			$(this).attr("data-state","still");
		}
	})
};
*/


