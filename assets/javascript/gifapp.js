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
	var queryURL= "http://api.giphy.com/v1/gifs/search?q="+searchTopic+"&api_key=a41b79063a3144bcaf95cb7d86b8ae89limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response){
		var results = response.data;
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
//click functions for buttons
//$("document").on(click)

//displaying the data retrieved from Giphy API onto the DOM