'use strict';

var imageOneEl = document.getElementById('image1');
var imageTwoEl = document.getElementById('image2');
var imageThreeEl = document.getElementById('image3');
var sectionEL = document.getElementById('imagesDisplayed');

//array that contains all product information
var allProducts = [];

//create Object Constructor
function Products(alt, src, title) {
  this.alt = alt;
  this.title = title;
  this.src = src;
  this.viewed = 0;
  this.clicked = 0;
  this.lastdisplayed = false;
  this.percentage = 0;
  allProducts.push(this);
}

//calculates random number 
function random(max) {
  return Math.floor(Math.random() * max);
}

//Display Images to screen - calculation to avoid repeats
function displayedImages() {
  do {
  var pic1 = random(allProducts.length);
  var pic2 = random(allProducts.length);
  var pic3 = random(allProducts.length);
  }
  while ((pic1 === pic2) || (pic2 === pic3) || (pic1 === pic3) || (allProducts[pic1].lastdisplayed === true) || (allProducts[pic2].lastdisplayed === true) || (allProducts[pic3].lastdisplayed === true));
  
  for (var h = 0; h < allProducts.length; h++) {
    allProducts[h].lastdisplayed = false;
  }
  
    imageOneEl.alt = allProducts[pic1].alt;
    imageOneEl.src = allProducts[pic1].src;
    imageOneEl.title = allProducts[pic1].title;
    allProducts[pic1].viewed++;
    allProducts[pic1].lastdisplayed = true;  
   
    imageTwoEl.alt = allProducts[pic2].alt;
    imageTwoEl.src = allProducts[pic2].src;
    imageTwoEl.title = allProducts[pic2].title;
    allProducts[pic2].viewed++;
    allProducts[pic2].lastdisplayed = true;
  
    imageThreeEl.alt = allProducts[pic3].alt;
    imageThreeEl.src = allProducts[pic3].src;
    imageThreeEl.title = allProducts[pic3].title;
    allProducts[pic3].viewed++;
    allProducts[pic3].lastdisplayed = true;
} 

var votes = 0;
// var tableMain = document.getElementById('resultsSection');

function handleClick(e) {
  var clickedImage = e.target.title;
  
  for(var i = 0; i < allProducts.length; i++){
      if (clickedImage === allProducts[i].title){
        allProducts[i].clicked++;
        votes++;
        if (votes === 25) {
          alert('Thank you for voting');
          votes = 0;
          
          for (var x = 0; x < allProducts.length; x++) {
            if (allProducts[x].viewed === 0) {
              allProducts[x].percentage = 0;
            } else {
              allProducts[x].percentage = ((allProducts[x].clicked/allProducts[x].viewed)*100).toFixed(0);
            }
            
            var tableMain = document.getElementById('resultsSection');
            var tableData = document.createElement('p');
            tableData.textContent = `Product Name: ${allProducts[x].title} | Times Displayed: ${allProducts[x].viewed} | Times Clicked: ${allProducts[x].clicked} | Percent: ${allProducts[x].percentage}%`;
            tableMain.appendChild(tableData);  
          }
        resetValues();
        }
      }
  }
  displayedImages();
  return;
}

function resetValues() {
  for (var y = 0; y <allProducts.length; y++){
    allProducts[y].clicked = 0;
    allProducts[y].viewed = 0;
    allProducts[y].percentage = 0;
    allProducts[y].lastdisplayed = false;
  }
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
