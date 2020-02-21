'use strict';

var imageName = document.getElementById('');
var sectionEL = document.getElementById('imagesDisplayed');
var votes = 0; //number of times a user can vote for an image
var allProducts = []; //array that contains all product information

//var arrays for chart data display
var labelsArray = [];
var viewedData = [];
var clickedData = [];
var percentData = [];
var chartColor = [];
var chartBorder = [];

document.getElementById("voteAgain").style.visibility = "hidden";

//Object Constructor
function Products(alt, src, title, viewed=0, clicked=0) {
  this.alt = alt;
  this.src = src;
  this.title = title;
  this.viewed = viewedData;
  this.clicked = clicked;
  this.lastdisplayed = false;
  this.percentage = 0;
  allProducts.push(this);
}

//generates randon rgba color and pushes it to chartColor array
function randomColor() {
  for (var k = 0; k < allProducts.length; k++) {
    // Uncomment the lines below to use random bar colors  
      // var r = (Math.floor(Math.random()*200));
      // var g = (Math.floor(Math.random()*200));
      // var b = (Math.floor(Math.random()*180));
      // var a = (Math.random().toFixed(1));
      // var rgba = `rgba(${r},${g},${b},${a})`;
      // chartColor.push(rgba);             
      chartColor.push('rgba(102,51,153,0.5)');
      chartBorder.push('rgba(211, 51, 144,0.5)'); 
  }
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

//pushes chart info to different arrays variables
function chartData() {
  for (var t = 0; t <allProducts.length; t++) {
    labelsArray.push(allProducts[t].title);
    viewedData.push(allProducts[t].viewed);
    clickedData.push(allProducts[t].clicked);
    // percentData.push(allProducts[t].percentage);
  }
}

function toLocalStorage() {
  var sTringArray = JSON.stringify(allProducts);
  localStorage.setItem('swProducts',sTringArray);
}

function handleClick(e) {
  var clickedImage = e.target.title;
  for(var i = 0; i < allProducts.length; i++){
    if (clickedImage === allProducts[i].title){
      allProducts[i].clicked++;
      votes++;
      if (votes === 25) {
        votes = 0;
        toLocalStorage();
        chartData();
        renderChart();
        renderData('resultsPlaceHolder', 'h3', 'Results from your selections');
        document.getElementById("voteAgain").style.visibility = "visible";
        
        sectionEL.removeEventListener('click', handleClick);
        for (var x = 0; x < allProducts.length; x++) {
          if (allProducts[x].viewed === 0) {
            allProducts[x].percentage = 0;
            percentData.push(allProducts[x].percentage);
          } else {
            allProducts[x].percentage = parseFloat(((allProducts[x].clicked/allProducts[x].viewed)*100).toFixed(0));
            percentData.push(allProducts[x].percentage);
          }
          renderData('resultsPlaceHolder', 'p', `Product Name: ${allProducts[x].title} | Times Displayed: ${allProducts[x].viewed} | Times Clicked: ${allProducts[x].clicked} | Percent: ${allProducts[x].percentage}%`);  
        }
        // resetValues();
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
          data: viewedData,
          backgroundColor: chartColor,
          borderColor: chartBorder, 
          borderWidth: 2
        }, 
        {
          label: 'Times Clicked',
          data: clickedData,
          backgroundColor: chartBorder,
          borderColor: chartColor, 
          borderWidth: 2
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


function populateData(){
  if (localStorage.getItem('swProducts')) {
    console.log('There is local Storage');
    var allStorageProducts = JSON.parse(localStorage.getItem('swProducts'));
    console.log(allStorageProducts);
    for (var i = 0; i < allStorageProducts.length; i++) {
      new Products(
        allStorageProducts[i].alt,
        allStorageProducts[i].src, 
        allStorageProducts[i].title,
        allStorageProducts[i].viewed,
        allStorageProducts[i].clicked);
    }
  } else {
      console.log('There is no localStorage');
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
    }
}


sectionEL.addEventListener('click', handleClick);

populateData();
displayedImages(); 
randomColor();