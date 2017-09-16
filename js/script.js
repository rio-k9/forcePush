var currentSessionSearchCount = 0;
console.log("Hello I Am Here")
window.onload = function(){
	console.log('ready');
	var search_button = document.getElementById('search_button'); 
	search_button.addEventListener('click', doSearch);
}

function movieTitle(){

	var titleArray = ["", "Movie Title: <hr>", "Release Year: <hr>", "IMDB I.D: ", "Feature: <hr>", "Poster URL: <hr>"]
	for (var i = 1; i <= 5; i++) {
		document.getElementById("title" + i).innerHTML = titleArray[i]
	}
	document.getElementById("title3").innerHTML = "<u>**" + titleArray[3] + "**</u> <hr>"
	document.getElementById("results").style.height = "420px";
}

function characterTitle(){

	var titleArray = ["", 'Name: <hr>','Height: <hr>','Weight: <hr>','Hair Color: <hr>','Skin Color: <hr>','Eye Color: <hr>','Galactic Birth Year: <hr>','Gender: <hr>']
	for (var i = 1; i <= 8; i++) {
		document.getElementById("title" + i).innerHTML = titleArray[i]
	}
	document.getElementById("results").style.height = "420px";
}

function imdbTitle(){

	var titleArray = ["", 'Title: <hr>','Year: <hr>','Rated: <hr>','Released: <hr>','Runtime <hr>','Genre <hr>','Director <hr>','Writer <hr>']
	for (var i = 1; i <= 8; i++) {
		document.getElementById("title" + i).innerHTML = titleArray[i]
	}
	var charImg = document.getElementById("characterimg")
	charImg.style.display = "inline-table";
	      	setTimeout(function(){
	      	charImg.src="css/defaultcharacter.png";
				charImg.style.opacity = "1";
				var audio = new Audio('js/default.mp3')
				audio.play()
			},1000);

	document.getElementById("results").style.height = "570px";
}



function displayBoxes() {
	var infoBox = document.getElementsByClassName("infoBox");
	console.log(infoBox.length)
	for ( var i = 0; i < infoBox.length; i++) {
		infoBox[i].style.display = "inline-table";
	}
	setTimeout(function() {
		for (i = 0; i < infoBox.length; i++) {
		infoBox[i].style.opacity = "1";
		}
	},2000);
}

function movieBoxOnly() {
	var boxHide = document.getElementsByClassName("infoBox");

	for (var i = 0; i <= 7; i++) {
		boxHide[i].style.display = "none";
		boxHide[i].style.opacity = "0";
	}

	
	for (var i = 0; i <= 3; i++) {
		boxHide[i].style.display = "inline-table";
	}
	
	setTimeout(function() {
		for (var i = 0; i <= 3; i++) {
			boxHide[i].style.opacity = "1";
		}
	},2000);
}



	

function allBoxes(){
	var boxHide = document.getElementsByClassName("infoBox");
	for (var i = 0; i <= 7; i++) {
			boxHide[i].style.display = "none";
			boxHide[i].style.opacity = "0";
		}


	for (var i = 0; i <= 7; i++) {
	boxHide[i].style.display = "inline-table";
	}	

	setTimeout(function() {
		for (var i = 0; i <= 7; i++) {
			boxHide[i].style.opacity = "1";
		}
	},2000);
	}
							
function deleteText() {  //NEEDS TO ACCOMODATE CHANGE IN VARIABLE NAMES
	var infoBox = document.getElementsByClassName('infoBox');
	var sectionInfo = document.getElementsByClassName('sectionInfo')
	for (var i = 0; i <= 7; i++) {
		var characterInfo = document.getElementById("characterwrite" + i)
		infoBox[i].removeChild(characterInfo)	
		}	
};	

function createTextElements() {
	var infoBox = document.getElementsByClassName('infoBox');
		for (var i = 0; i <= 7; i++){
			var p_section = document.createElement('p');
			p_section.setAttribute("id", "characterwrite" + i);
			p_section.className = "sectionInfo";
			infoBox[i].appendChild(p_section);
		}
	}	

function newText() {
	var characterInfo = document.getElementsByClassName("sectionInfo")
	console.log(resultKeys[0])
	console.log(characterInfo)
		for (var i = 0; i <= 7; i++) {
			var outText = document.createTextNode(resultValues[i])
			characterInfo[i].appendChild(outText);
		}
	if (resultKeys[0] === "name"){
		changeStarImage(resultValues[0])
	}
	else if (resultValues[3] === "movie"){
		changeMovieImage(resultKeys[4], resultValues[4])
	}
	
}


function changeStarImage(a) {
		
	var charImg = document.getElementById("characterimg")
	charImg.style.display = "inline-table";
	switch (a) {

		case "Luke Skywalker":
			charImg.src="css/" + a + ".jpg";
			setTimeout(function(){
				charImg.style.opacity = "1";
				var audio = new Audio("js/jedi.mp3")
				audio.play()
			},1000);
			break;

		case "Obi-Wan Kenobi":
			charImg.src="css/" + a + ".jpg";
			setTimeout(function(){
				charImg.style.opacity = "1";
				var audio = new Audio("js/dagobah.mp3")
				audio.play()
			},1000);
			break;

      	case "Darth Vader":
			charImg.src="css/" + a + ".jpg";
			setTimeout(function(){
				charImg.style.opacity = "1";
				var audio = new Audio("js/" + a + ".mp3")
				audio.play()
			},1000);
			break;
     
      	default:

	      	charImg.style.display = "inline-table";
	      	setTimeout(function(){
	      	charImg.src="css/defaultcharacter.png";
				charImg.style.opacity = "1";
				var audio = new Audio('js/default.mp3')
				audio.play()
			},1000);
			break;
	}
}

function changeMovieImage(a, b) {
	var charImg = document.getElementById("characterimg")
	charImg.style.display = "inline-table";

switch (a) {
	case "Poster":
		charImg.src= b;
		setTimeout(function(){
			charImg.style.opacity = "1";
		},1000);	
		break;

	default:

	    charImg.style.display = "inline-table";
	    setTimeout(function(){
	    	charImg.src="css/defaultcharacter.png";
			charImg.style.opacity = "1";
			var audio = new Audio('js/default.mp3')
			audio.play()
		},1000);
			break;
}
}


var doSearch = function(){
	currentSessionSearchCount += 1;
	if (currentSessionSearchCount <= 1) {
		displayBoxes();
	}
	else {
		deleteText();
	}
	console.log(currentSessionSearchCount);
	var search_data = document.getElementById('search_data').value;
	var option_1 = document.getElementById('option_1').value;
	var option_2 = document.getElementById('option_2').value;
	var option_3 = document.getElementById('option_3').value
 //grabbing input data from user
	console.log(search_select)
	 //grabbing input data from user
	console.log(search_data);  

	var search_select = document.getElementById('search_select').value
	fetch(search_select + search_data).then(function(response){  //fetch our search data from API
		return response.json(); //returning our response and converting to data we can assign to variables
	}).then(function(data){
		console.log(data);
		var iArray = data
		var iKeys = Object.keys(iArray);
		if (iKeys[4] === "Runtime") {
			console.log("It Is!");
			var myArray = iArray
			var firstResult = iArray
			resultKeys = Object.keys(iArray)
			resultValues = Object.values(iArray)
			imdbTitle()
			allBoxes()

		}
		console.log(iKeys)
		console.log(iArray)
		if (data.Response === "False") {
			alert("No results found.")
			window.location.replace(window.location.pathname + window.location.search + window.location.hash);
		}


		createTextElements();
		if (search_select === option_1){
			var myArray = data.Search; 
			var firstResult = data.Search[0];
			movieTitle();
			movieBoxOnly();
		}	
		else if (search_select === option_2){ 
			var myArray = data.results;
			var firstResult = data.results[0];
			characterTitle();


		allBoxes()

		}
		console.log(myArray.length)
		if (myArray.length === 0) {
			alert("No results! Please refine your search")
			window.location.replace(window.location.pathname + window.location.search + window.location.hash);
		}

		resultKeys = Object.keys(firstResult);
		resultValues = Object.values(firstResult);

		console.log(myArray[0]);
		console.log(resultValues[0]);


		

		if (currentSessionSearchCount >= 0){
		newText();
		}		

		else { 


			alert("Nothing Found, Try Again!")
		}	
	});

};	