'use strict';

var imageOneEl = document.getElementById('image1');
var imageTwoEl = document.getElementById('image2');
var imageThreeEl = document.getElementById('image3');
var sectionEL = document.getElementById('imagesDisplayed');

var allProducts = [];

function Products(alt, src, title) {
  this.alt = alt;
  this.title = title;
  this.src = src;
  this.viewed = 0;
  this.clicked = 0;
  this.lastdisplayed = false;
  allProducts.push(this);
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function displayedImages() {
  var leftPic = random(allProducts.length);
  var middlePic = random(allProducts.length);
  var rightPic = random(allProducts.length);
  
  
  while ((middlePic === leftPic) || (middlePic === rightPic) || (leftPic === rightPic)) {
    var rightPic = random(allProducts.length);
    var middlePic = random(allProducts.length);
    var rightPic = random(allProducts.length); 
  }
    imageOneEl.alt = allProducts[leftPic].alt;
    imageOneEl.src = allProducts[leftPic].src;
    imageOneEl.title = allProducts[leftPic].title;
    allProducts[leftPic].viewed++;
    allProducts[leftPic].lastdisplayed = true;  
   
    imageTwoEl.alt = allProducts[middlePic].alt;
    imageTwoEl.src = allProducts[middlePic].src;
    imageTwoEl.title = allProducts[middlePic].title;
    allProducts[middlePic].viewed++;
    allProducts[middlePic].lastdisplayed = true;
  
    imageThreeEl.alt = allProducts[rightPic].alt;
    imageThreeEl.src = allProducts[rightPic].src;
    imageThreeEl.title = allProducts[rightPic].title;
    allProducts[rightPic].viewed++;
    allProducts[rightPic].lastdisplayed = true;
} 
var votes = 0;

function handleClick(e) {
  var clickedImage = e.target.title;
  for(var i = 0; i < allProducts.length; i++){
      if (clickedImage === allProducts[i].title){
        allProducts[i].clicked++;
        votes++;
      }
  }
  if (votes === 7) {
    alert('Thank you for voting')
    votes = 0;
  }
  displayedImages();
}


new Products('bag','img/bag.jpg','bag')
new Products('banana','img/banana.jpg','banana')
new Products('bathroom','img/bathroom.jpg','bathroom')
new Products('boots','img/boots.jpg','boots')
new Products('breakfast','img/breakfast.jpg','breakfast')
new Products('bubblegum','img/bubblegum.jpg','bubblegum')
new Products('chair','img/chair.jpg','chair')
new Products('cthulhu','img/cthulhu.jpg','cthulhu')
new Products('dog-duck','img/dog-duck.jpg','dog-duck')
new Products('dragon','img/dragon.jpg','dragon')
new Products('pen','img/pen.jpg','pen')
new Products('pet-sweep','img/pet-sweep.jpg','pet-sweep')
new Products('scissors','img/scissors.jpg','scissors')
new Products('shark','img/shark.jpg','shark')
new Products('sweep','img/sweep.png','sweep')
new Products('tauntaun','img/tauntaun.jpg','tauntaun')
new Products('unicorn','img/unicorn.jpg','unicorn')
new Products('usb','img/usb.gif','usb')
new Products('water-can','img/water-can.jpg','water-can')
new Products('wine-glass','img/wine-glass.jpg','wine-glass')

sectionEL.addEventListener('click', handleClick);

displayedImages();