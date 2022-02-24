$(document).ready(function(){
	changeShop();
	
	var images = ["HatenoVillagePics/botwvillageroofs2.png", "HatenoVillagePics/botwbeachplease4.png", "HatenoVillagePics/botwbluefire7.png"];
	var x = 0;	

	window.setInterval(changeMainPhoto, 4000);



	function changeShop(){
		//var frontPgStores = document.querySelectorAll(a.frontpage); //select all a elements
		$("#tonpuinn").mouseenter(function(){
			$(".chooseStore").attr("src","HatenoVillagePics/InnHatenoVillage.jpg");
		});

		$("#ventest").mouseenter(function(){
			$(".chooseStore").attr("src","HatenoVillagePics/hv9ventestinside.jpg");
		});

		$("#tourguide").mouseenter(function(){
			$(".chooseStore").attr("src","HatenoVillagePics/seldonbotw.jpg");
		});

		$("#kochidyeshop").mouseenter(function(){
			$(".chooseStore").attr("src","HatenoVillagePics/kochidyeshop.png");
		});

		$("#bolsonconst").mouseenter(function(){
			$(".chooseStore").attr("src","HatenoVillagePics/Hylian_Homeowner_7.0.jpg");
		});

		$("#cooking").mouseenter(function(){
			$(".chooseStore").attr("src","HatenoVillagePics/hvcooking.png");
		});

		$("#generalgoods").mouseenter(function(){
			$(".chooseStore").attr("src","HatenoVillagePics/insidegoodstore.png");
		});
	}

	function changeMainPhoto(){
		
		$("#slideshow1").attr("src",images[x]);

		if(x === 2)
			{x=0;}
		else
			{x++;}
	}

});