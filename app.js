'use strict';

var imageName = document.getElementById('');
var sectionEL = document.getElementById('imagesDisplayed');
var votes = 0; //number of times a user can vote for an image
var allProducts = []; //array that contains all product information
var labelsArray = [];
var viewedData = [];
var clickedData = [];

document.getElementById("voteAgain").style.visibility = "hidden";

//Object Constructor
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

    renderImage('image1',`${allProducts[pic1].src}`,`${allProducts[pic1].alt}`,`${allProducts[pic1].title}`);
    allProducts[pic1].viewed++;
    allProducts[pic1].lastdisplayed = true;  
    
    renderImage('image2',`${allProducts[pic2].src}`,`${allProducts[pic2].alt}`,`${allProducts[pic2].title}`);
    allProducts[pic2].viewed++;
    allProducts[pic2].lastdisplayed = true;
  
    renderImage('image3',`${allProducts[pic3].src}`,`${allProducts[pic3].alt}`,`${allProducts[pic3].title}`);
    allProducts[pic3].viewed++;
    allProducts[pic3].lastdisplayed = true;
} 

function handleClick(e) {
  var clickedImage = e.target.title;
  for(var i = 0; i < allProducts.length; i++){
    if (clickedImage === allProducts[i].title){
      allProducts[i].clicked++;
      votes++;
      if (votes === 25) {
        votes = 0;
        for (var t = 0; t <allProducts.length; t++) {
          labelsArray.push(allProducts[t].title);
          viewedData.push(allProducts[t].viewed);
          clickedData.push(allProducts[t].clicked);
        }
        renderChart();

        renderData('resultsSection', 'h2', 'Results from your selections');
        document.getElementById("voteAgain").style.visibility = "visible";
        
        sectionEL.removeEventListener('click', handleClick);
        for (var x = 0; x < allProducts.length; x++) {
          if (allProducts[x].viewed === 0) {
            allProducts[x].percentage = 0;
          } else {
            allProducts[x].percentage = ((allProducts[x].clicked/allProducts[x].viewed)*100).toFixed(0);
          }
          renderData('resultsSection', 'p', `Product Name: ${allProducts[x].title} | Times Displayed: ${allProducts[x].viewed} | Times Clicked: ${allProducts[x].clicked} | Percent: ${allProducts[x].percentage}%`);  
        }
        resetValues();
      }
    }
  }
  displayedImages();
}

// This function will be used only in case I want to have more than 1 round in the same browser session. 
function resetValues() {
  for (var y = 0; y <allProducts.length; y++){
    allProducts[y].clicked = 0;
    allProducts[y].viewed = 0;
    allProducts[y].percentage = 0;
    allProducts[y].lastdisplayed = false;
  }
}

//renders images to the page
function renderImage(elem, src, alt, title, ) {
  imageName = document.getElementById(elem);  
  imageName.src = src;
  imageName.alt = alt;
  imageName.title = title;
}

//funtion to render data to the page
function renderData(parentId, elem, elemContent) {
  var parentEL = document.getElementById(parentId);
  var pageEl = document.createElement(elem);
  pageEl.textContent = elemContent;
  parentEL.appendChild(pageEl); 
}

function renderChart() {
  var ctx = document.getElementById('myData');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelsArray,
        datasets: [{
            label: 'Times Displayed',
            data: viewedData, clickedData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
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