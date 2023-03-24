// img1

var randomNumer1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" + randomNumer1 + ".png";
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


// img 2

var randomNumer2 = Math.floor(Math.random()*6) +1;
var randomImage2 = "dice" + randomNumer2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumer1 > randomNumer2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if(randomNumer1 == randomNumer2){
    document.querySelector("h1").innerHTML = "Tie!";
} else{
    document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}