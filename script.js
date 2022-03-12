let svg = document.getElementById("svg")
svg.addEventListener("click", function() {
				svg.style.animation ="dash 5s ease-out 1 alternate"; });
let svg2 = document.getElementById("svg2")
svg2.addEventListener("click", function() {
				svg2.style.animation ="dash 5s ease-out 1 alternate"; });
let svg3 = document.getElementById("svg3")
svg3.addEventListener("click", function() {
				svg3.style.animation ="dash 5s ease-out 1 alternate"; });
let svg4 = document.getElementById("svg4")
svg4.addEventListener("click", function() {
				svg4.style.animation ="dash 5s ease-out 1 alternate"; });



function heartchange(){
let Image = document.getElementById('heart'); 
		if (Image.src.match("heart")){
		Image.src = "./images/redheart.png"; 
		} 
		else { 
		Image.src = "./images/heart.png";}
	}
	function likesnumber(){
		document.getElementById('number').innerHTML = '29,784,827 likes';			
	}
function heartchange1(){

let Image1 = document.getElementById('heart1'); 
		if (Image1.src.match("heart")){
		Image1.src = "./images/redheart.png"; 
		} 
		else {
		Image1.src = "./images/heart.png";}
		
}
function likesnumber1(){
	document.getElementById('number1').innerHTML = '101,680,827 likes';			
	}
function heartchange2(){
let Image2 = document.getElementById('heart2'); 
		if (Image2.src.match("heart")){
		Image2.src = "./images/redheart.png"; 
		} 
		else { 
		Image2.src = "./images/heart.png";}
}
function likesnumber2(){
	document.getElementById('number2').innerHTML = '787 likes';			
	}



function opacity(){
document.getElementsByClassName("phone")[0].style.display = 'none';	
document.getElementsByClassName("profile")[0].style.display = 'block';
}
function opacitynormal(){
document.getElementsByClassName("phone")[0].style.display = 'block';	
document.getElementsByClassName("profile")[0].style.display = 'none';				
}
/* let op = document.getElementsByClassName("profile")[0]
let footimg = document.getElementById("footimg")
footimg.addEventListener("click", function() {
				op.style.opacity ="1"; }); */
function empty(){
document.getElementsByClassName("allposts")[0].style.opacity = '0';
document.getElementById("select").style.borderBottom = '2px solid';
document.getElementById("select0").style.borderBottom = 'none';
}
function fill(){
document.getElementsByClassName("allposts")[0].style.opacity = '1';
document.getElementById("select0").style.borderBottom = '2px solid';
document.getElementById("select").style.borderBottom = 'none';
}



let playSound = () => new Audio("Space is closer than you think (18.5 miles away to be exact)_ time to start acting like it. __Head to the link in bio to start the future today with us(video0)(mp3).mp3").play()
document.getElementById('video').onclick = function () {
    document.getElementById('video').play();
};



function bookmark(){
let Image = document.getElementById('bkmark'); 
		if (Image.src.match("bookmark-white")){
		Image.src = "./images/blackbookmark.png"; 
		} 
		else { 
		Image.src = "./images/bookmark-white.png";}
	}
function bookmark1(){
let Image1 = document.getElementById('bkmark1'); 
		if (Image1.src.match("bookmark-white")){
		Image1.src = "./images/blackbookmark.png"; 
		} 
		else {
		Image1.src = "./images/bookmark-white.png";}
		}
function bookmark2(){
let Image2 = document.getElementById('bkmark2'); 
		if (Image2.src.match("bookmark-white")){
		Image2.src = "./images/blackbookmark.png"; 
		} 
		else { 
		Image2.src = "./images/bookmark-white.png";}	
	}