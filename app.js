"use strict"
var productName = [
    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "dog-duck.jpg",
    "dragon.jpg",
    "pen.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    'usb.gif',
    "water-can.jpg",
    "wine-glass.jpg"
];
// get the images by (querySelector)
var leftImage = document.querySelector('#left-images');
var midlleImage = document.querySelector('#midlle-images');
var rightImage = document.querySelector('#right-images');
var imageSection = document.querySelector('#proudctSelction')


// adding src,alt and title to the leftImage
leftImage.setAttribute('src', `images/${productName[14]}`);
leftImage.setAttribute('alt', productName[14]);
leftImage.setAttribute('title', productName[14]);
// adding src,alt and title to the midlleImage
midlleImage.setAttribute('src', `images/${productName[17]}`);
midlleImage.setAttribute('alt', productName[17]);
midlleImage.setAttribute('title', productName[17]);
// adding src,alt and title to the midlleImage
rightImage.setAttribute('src', `images/${productName[2]}`);
rightImage.setAttribute('alt', productName[2]);
rightImage.setAttribute('title', productName[2]);

// create constructor function for the product Name
function Product(name) {
    this.name = name;
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `images/${this.name}`;
    // console.log(this.imagePath);


    Product.all.push(this);
}
Product.all = [];

// instantiate objects for all the product one shot
for (var i = 0; i < productName.length; i++) {
    new Product(productName[i])
}
// render 3 random Product
var leftProduct, midlleProduct, rightProduct;
var imagesShowed =[];
function render() {
    leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    // console.log(leftProduct);
    midlleProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    // adding src,alt and title to the leftImage
    if (leftProduct !== midlleProduct && leftProduct !== rightProduct) {
        if (midlleProduct !== leftProduct && midlleProduct !== rightProduct) {
            if (rightProduct !== leftProduct && rightProduct !== midlleProduct) {
                while (imagesShowed.includes(leftProduct)) {
                    leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
                }
                    while (imagesShowed.includes(midlleProduct)) {
                        midlleProduct = Product.all[randomNumber(0, Product.all.length - 1)];
                    }
                         while (imagesShowed.includes(rightProduct)) {
                            rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
                        }
                        imagesShowed.push(leftProduct);
                        imagesShowed.push(midlleProduct);
                        imagesShowed.push(rightProduct);
                        while(imagesShowed.length > 3){
                            imagesShowed.shift();
                        }

                            

                leftImage.setAttribute('src', leftProduct.imagePath);
                // console.log(leftProduct);
                leftImage.setAttribute('alt', leftProduct.name);
                leftImage.setAttribute('title', (leftProduct.name));
                // adding src,alt and title to the midlleImage
                midlleImage.setAttribute('src', midlleProduct.imagePath);
                midlleImage.setAttribute('alt', midlleProduct.name);
                midlleImage.setAttribute('title', (midlleProduct.name));
                // adding src,alt and title to the midlleImage
                rightImage.setAttribute('src', rightProduct.imagePath);
                rightImage.setAttribute('alt', rightProduct.name);
                rightImage.setAttribute('title', (rightProduct.name));
            }
        }
    }
}
render();
// add the event listener to render new images
proudctSelction.addEventListener('click', handleClickOnproudct);
var totalClicks = 0;
function handleClickOnproudct(event) {
    if (totalClicks < 25) {
        // alert("let see what is next!!");
        if (event.target.id !== 'proudctSelction') {
            // console.log('hello',leftProduct);
            
            if (event.target.id === 'left-images') {
                leftProduct.clicks++;
                // console.log(leftProduct.clicks);
                
            }
            else if (event.target.id === 'midlle-images') {
                midlleProduct.clicks++;
            }
            else if (event.target.id === 'right-images') {
                rightProduct.clicks++;
            }
            totalClicks++;
            leftProduct.views++;
            midlleProduct.views++;
            rightProduct.views++;
            updateProduct();

            render();
        }
        // console.log(totalClicks);
    } else {
        alert("Thanks for helping us you have reached the max attempts (25 votes) ")
        proudctSelction.removeEventListener('click', handleClickOnproudct);
        selctionsResult()
        chartFun();
      

    }
}

function selctionsResult() {
    var ulRe = document.getElementById('Selctions')
    for (var i = 0; i < Product.all.length; i++) {
        var liRe = document.createElement('li');
        ulRe.appendChild(liRe)
        Product.all[i].name = (Product.all[i].name);
        liRe.textContent = `${Product.all[i].name} has ${Product.all[i].clicks} clicks and ${Product.all[i].views} views`
    }
}



//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// visual representation of how many times a product was clicked so that we can visually analyze the results.
function chartFun (){
    var clicksArr = [];
for ( var i = 0 ; i <Product.all.length; i++){
    clicksArr.push(Product.all[i].clicks);
    }
    // console.log('kdddddd',clicksArr);
    var viewsArr = [];
for ( var v = 0 ; v <Product.all.length; v++){
    viewsArr.push(Product.all[v].views);
}
    console.log('kdddddd',clicksArr);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels:  productName,
            datasets: [{
                label: '# of Votes',
                data: clicksArr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(69, 45, 200, 0.2)',
                    'rgba(197, 99, 75, 0.2)',
                    'rgba(153, 102, 25, 0.2)',
                    'rgba(85, 102, 255, 0.2)',
                    'rgba(41, 102, 57, 0.2)',
                    'rgba(178, 58, 255, 0.2)',
                    'rgba(78, 25, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(57, 78, 95, 0.2)',
                    'rgba(78, 147, 247, 0.2)',
                    'rgba(1, 15, 157, 0.2)',
                    'rgba(47, 92, 24, 0.2)',
                    'rgba(57, 134, 102, 0.2)',
                    'rgba(14, 14, 14, 0.2)',
                    'rgba(25, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',

                ],
            
                borderWidth: 1
            },
            {
                label: '# of views',
                data: viewsArr,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(69, 45, 200, 0.2)',
                    'rgba(197, 99, 75, 0.2)',
                    'rgba(153, 102, 25, 0.2)',
                    'rgba(85, 102, 255, 0.2)',
                    'rgba(41, 102, 57, 0.2)',
                    'rgba(178, 58, 255, 0.2)',
                    'rgba(78, 25, 255, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(57, 78, 95, 0.2)',
                    'rgba(78, 147, 247, 0.2)',
                    'rgba(1, 15, 157, 0.2)',
                    'rgba(47, 92, 24, 0.2)',
                    'rgba(57, 134, 102, 0.2)',
                    'rgba(14, 14, 14, 0.2)',
                    'rgba(25, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',

                ],
            
                borderWidth: 1
            }
        ]
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
function updateProduct (){
    var productString = JSON.stringify(Product.all);
    localStorage.setItem("productChoosed",productString);
}

function callProduct(){
    var productString1 = localStorage.getItem("productChoosed");
    console.log(productString1);
    
    if (productString1){
        Product.all = JSON.parse(productString1);
        selctionsResult()
        chartFun();
    }
}  
callProduct();
