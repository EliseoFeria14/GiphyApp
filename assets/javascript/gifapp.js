console.log("javascript is linked");

 $(document).ready(function(){
             if (jQuery) {  
               // jQuery is loaded  
               console.log("Yeah!");
             } else {
               // jQuery is not loaded
              console.log("Doesn't Work");
             }
          });
//array with startup buttons
var topicsArray = ["Jurassic Park","The Mask", "Talladega Nights", "Anchorman","Bruce Almighty","Superbad","21 Jumpstreet", "WaterBoy", "Happy Gilmore", "Horrible Bosses"];
//button rendering funtion
function buttonFill(){
	$("#buttonSpace").empty();

	for (i=0;i<topicsArray.length;i++){
		var buttonCreate = $('<button>');

		buttonCreate.addClass("topicButton");
		buttonCreate.attr("data-Giphy",topicsArray[i]);
		console.log(buttonCreate);
		buttonCreate.text(topicsArray[i]);
		$("#buttonSpace").append(buttonCreate);
	}
}
//build the api url and with reference to the array

//functions for pushing data from the search bar to the topicsArray
function searchbarArrayPusher(){
	$('#searchPush').on('click',function(event){
		var newBtnTopic = $('#topicsInput').val().trim();
		topicsArray.push(newBtnTopic);
		console.log(topicsArray);
		buttonFill();
	});
}
//click functions for buttons
//$("document").on(click)

//displaying the data retrieved from Giphy API onto the DOM