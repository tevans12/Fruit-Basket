$(document).ready(function(){
	
	var bananasURL = "bananas.html";
	var blueberriesURL = "blueberries.html";
	var cherriesURL = "cherries.html";
	var grapesURL = "grapes.html";
	var strawberriesURL = "strawberries.html";

	//$(location).attr("href",bananasURL);
	
	//Set Fruit detail
	function setFruit(){
		var fruitName = "";
		var fruitColorClass = "";
		var fruitPicture = "";
		
		//climate, type, and latitude
		
		if($('body').hasClass('bananas')){
			fruitName = "Bananas";
			fruitColorClass = "yellowBG";
			fruitPicture = "FruitPics/BananaPhoto.png";
		}else if($('body').hasClass('blueberries')){
			fruitName = "Bluberries";
			fruitColorClass = "blueBG";
			fruitPicture = "FruitPics/BlueberryPhoto.png";
			//console.log('we got here');
		}else if($('body').hasClass('cherries')){
			fruitName = "Cherries";
			fruitColorClass = "redBG";
			fruitPicture = "FruitPics/CherryPhoto2.png";
		}else if($('body').hasClass('grapes')){
			fruitName = "Grapes";
			fruitColorClass = "greenBG";
			fruitPicture = "FruitPics/GreenGrapePhoto.png";
		}else if($('body').hasClass('strawberries')){
			fruitName = "Strawberries";
			fruitColorClass = "redBG";
			fruitPicture = "FruitPics/StrawberryPhoto1.png";
		}
		
		$('.sideFruitPicture img').attr('src',fruitPicture);
		$('.introductionBox .fruitDetailButton, #FruitMiniDetail_desktop .sideFruitButton').addClass(fruitColorClass);
		$('.currentFruit').append(fruitName);
		
	}
	
	function setURLS(){
		$('.logoLink').attr('onclick',"window.location.href='index.html';");
		$('.headerButton:contains(Bananas)').attr('onclick',"window.location.href='"+bananasURL+"';");
		$('.headerButton:contains(Blueberries)').attr('onclick',"window.location.href='"+blueberriesURL+"';");
		$('.headerButton:contains(Cherries)').attr('onclick',"window.location.href='"+cherriesURL+"';");
		$('.headerButton:contains(Grapes)').attr('onclick',"window.location.href='"+grapesURL+"';");
		$('.headerButton:contains(Strawberries)').attr('onclick',"window.location.href='"+strawberriesURL+"';");
	}

	setFruit();
	setURLS();
	
	//Homepage button
	function pressConfirmFruitButton(){
		var FruitSelectValue = $('#Fruit_select')[0].value;
		
		if(FruitSelectValue == "banana"){
			console.log('banana selected');
			$(location).attr("href",bananasURL);
		}else if(FruitSelectValue == "blueberry"){
			console.log('blueberry selected');
			$(location).attr("href",blueberriesURL);
		}else if(FruitSelectValue == "cherry"){
			console.log('cherry selected');
			$(location).attr("href",cherriesURL);
		}else if(FruitSelectValue == "grapes"){
			console.log('grapes selected');
			$(location).attr("href",grapesURL);
		}else if(FruitSelectValue == "strawbberry"){
			console.log('strawberry selected');
			$(location).attr("href",strawberriesURL);
		}else{
			console.log('Fruit not selected');
		}
	}
	
	$("#Submit_fruit_select_button").click(function(){
		//console.log('Confirm Fruit button pressed');
		pressConfirmFruitButton();
	});
	
	
	function functionName(){
		
	}
	
	function functionName(){
		if(window.innerWidth <= "920"){
			
		}
	}
	
});