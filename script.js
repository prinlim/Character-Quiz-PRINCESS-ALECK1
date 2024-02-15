$(".final-Result").hide();

var trait; // Declare trait outside the click function
var scales;


$(".submit-Two").click(function(){
	var trait = $(".q1").val();
	var scales = $(".q2").val();
		$(".final-Result").show();
		if (trait === "leader" && scales >=4) {
				minionName = "Kevin";
				$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
				$(".yellow").attr("src", "kevin.png");
		} 
		
		else if (trait === "rebel" && scales <=3){
				minionName = "Stuart";
				$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
			$(".yellow").attr("src", "https://i.pinimg.com/736x/4d/96/3a/4d963ab809672e1585bc3a7f77f1c2e0.jpg");
		}
			else if (trait === "rebel" && scales > 3){
					minionName = "Otto";
					$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
				$(".yellow").attr("src", "otto.png");
			}
		else if (trait === "social butterfly" && scales >=4){
				minionName = "Otto";
				$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
			$(".yellow").attr("src", "otto.png");

		}
		
		else if (trait === "daydreamer" && scales >=4){
				minionName = "Bob";
				$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
			$(".yellow").attr("src", "Bob.jpeg");
		} 
		
		else if (scales <= 3 && trait === "leader") {
				minionName = "Stuart";
				$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
			$(".yellow").attr("src", "https://i.pinimg.com/736x/4d/96/3a/4d963ab809672e1585bc3a7f77f1c2e0.jpg");
			} 
			else if (scales <= 3 && trait === "daydreamer") {
				minionName = "Stuart";
				$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
				$(".yellow").attr("src", "https://i.pinimg.com/736x/4d/96/3a/4d963ab809672e1585bc3a7f77f1c2e0.jpg");
			} 
				else if (scales <= 3 && trait === "social butterfly") {
					minionName = "Stuart";
					$(".character").append("<h2>" +"You are a " + trait + " and your devotion to a villain is scaled as " + scales + ", you are " + minionName + "!"+"</h2>");
					$(".yellow").attr("src", "https://i.pinimg.com/736x/4d/96/3a/4d963ab809672e1585bc3a7f77f1c2e0.jpg");
				}

		else{
		$(".character").append("<h2>" + "You didn't input what was asked, your default minion is Stuart!" + "</h2>");
			$(".yellow").attr("src", "https://i.pinimg.com/736x/4d/96/3a/4d963ab809672e1585bc3a7f77f1c2e0.jpg");
		} 
	
});

$(".restart").click(function(){
	$(".final-Result").hide();
	$('#counter').text(Number($('#counter').text())+1);

});