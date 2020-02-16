'use strict';

var imageOneEl = document.getElementById('image1');
var imageTwoEl = document.getElementById('image2');
var imageThreeEl = document.getElementById('image3');
var sectionDisplay = document.getElementById('imagesDisplayed');

var allProducts = [];

function Products(name, path) {
  this.name = name;
  this.path = path,
  this.viewed = 0;
  this.clicked = 0;
  this.lastdisplayed = 0;
  allProducts.push(this);
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function displayedImages() {
  var leftPic = random(allProducts.length);
  var middlePic = random(allProducts.length);
  var rightPic = random(allProducts.length);
  
    imageOneEl.alt = allProducts[leftPic].name;
    imageOneEl.src = allProducts[leftPic].path;
    allProducts[leftPic].viewed++;
    allProducts[leftPic].lastdisplayed = 1;  
   
   
    imageTwoEl.alt = allProducts[middlePic].name;
    imageTwoEl.src = allProducts[middlePic].path;
    allProducts[middlePic].viewed++;
    allProducts[middlePic].lastdisplayed = 1;
  
    imageThreeEl.alt = allProducts[rightPic].name;
    imageThreeEl.src = allProducts[rightPic].path;
    allProducts[rightPic].viewed++;
    allProducts[rightPic].lastdisplayed = 1;
  
} 

function handelClick(e) {
  var clickedImage = e.target.src;
  for(var i = 0; i < allProducts.length; i++){
      if (clickedImage === allProducts[i].src){
          allProducts[i].clicked++;
      }
  }
  displayedImages();
}

new Products('bag','img/bag.jpg')
new Products('banana','img/banana.jpg')
new Products('bathroom','img/bathroom.jpg')
new Products('boots','img/boots.jpg')
new Products('breakfast','img/breakfast.jpg')
new Products('bubblegum','img/bubblegum.jpg')
new Products('chair','img/chair.jpg')
new Products('cthulhu','img/cthulhu.jpg')
new Products('dog-duck','img/dog-duck.jpg')
new Products('dragon','img/dragon.jpg')
new Products('pen','img/pen.jpg')
new Products('pet-sweep','img/pet-sweep.jpg')
new Products('scissors','img/scissors.jpg')
new Products('shark','img/shark.jpg')
new Products('sweep','img/sweep.png')
new Products('tauntaun','img/tauntaun.jpg')
new Products('unicorn','img/unicorn.jpg')
new Products('usb','img/usb.gif')
new Products('water-can','img/water-can.jpg')
new Products('wine-glass','img/wine-glass.jpg')

sectionDisplay.addEventListener('click', handelClick);

displayedImages();