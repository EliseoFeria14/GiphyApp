console.log("javascript is linked");
//array with startup buttons
var topicsArray = ["Jurassic Park","The Mask", "Talladega Nights", "Anchorman","Bruce Almighty","Superbad","21 Jumpstreet", "WaterBoy", "Happy Gilmore", "Horrible Bosses"];
//button rendering funtion
function buttonFill(){
	$("#buttonSpace").empty();

	for (i<0;i>topicsArray.length;i++){
		var buttonCreate = $('<button>');

		buttonCreate.addClass("gifButton");
		buttonCreate.attr("data-Giphy",topicsArray.[i]);
		console.log(buttonCreate);
		buttonCreate.text(topicsArray.[i]);
		$("#buttonSpace").append(buttonCreate);
	}
};
buttonFill();
//click functions for ajax calling API

//displaying the data retrieved from Giphy API onto the DOM