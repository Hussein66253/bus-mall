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
leftImage.setAttribute('src',`images/${productName[14]}`);
leftImage.setAttribute('alt',productName[14]);
leftImage.setAttribute('title',productName[14]);
// adding src,alt and title to the midlleImage
midlleImage.setAttribute('src',`images/${productName[17]}`);
midlleImage.setAttribute('alt',productName[17]);
midlleImage.setAttribute('title',productName[17]);
// adding src,alt and title to the midlleImage
rightImage.setAttribute('src',`images/${productName[2]}`);
rightImage.setAttribute('alt',productName[2]);
rightImage.setAttribute('title',productName[2]);

// create constructor function for the product Name
function Product (name){
    this.name = name;
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `images/${this.name}`;
    // console.log(this.imagePath);
    

    Product.all.push(this);
}
 Product.all = [];

 // instantiate objects for all the product one shot
 for ( var i = 0 ; i < productName.length ; i++){
     new Product(productName[i])
 }
// render 3 random Product
var leftProduct , midlleProduct , rightProduct;
function render(){
    leftProduct = Product.all[randomNumber(0,Product.all.length-1)];
    // console.log(leftProduct);
    midlleProduct = Product.all[randomNumber(0,Product.all.length-1)];
    rightProduct = Product.all[randomNumber(0,Product.all.length-1)];
    // adding src,alt and title to the leftImage
     if(leftProduct !== midlleProduct && rightProduct){
        if(midlleProduct !== leftProduct && rightProduct){
            if(rightProduct !== leftProduct && midlleProduct){
                leftImage.setAttribute('src',leftProduct.imagePath);
                // console.log(leftProduct);
                leftImage.setAttribute('alt',leftProduct.name);
                leftImage.setAttribute('title',leftProduct.name);
                // adding src,alt and title to the midlleImage
                midlleImage.setAttribute('src',midlleProduct.imagePath);
                midlleImage.setAttribute('alt',midlleProduct.name);
                midlleImage.setAttribute('title',midlleProduct.name);
                // adding src,alt and title to the midlleImage
                rightImage.setAttribute('src',rightProduct.imagePath);
                rightImage.setAttribute('alt',rightProduct.name);
                rightImage.setAttribute('title',rightProduct.name);
            }
        }
    }   
}
render();
// add the event listener to render new images
proudctSelction.addEventListener('click',handleClickOnproudct);
var totalClicks = 0;
function handleClickOnproudct(event){
    if (totalClicks < 25 ){
        // alert("let see what is next!!");
    if (leftImage.imagePath!==midlleImage.imagePath ||  midlleImage.imagePath!==rightImage.imagePath || leftImage.imagePath!==rightImage.imagePath){
        if(event.target.id !== 'proudctSelction'){
            if(event.target.id === 'leftImage'){
                leftImage.totalClicks++;
                leftProduct.views++;
                console.log(leftImage.Clicks);
                console.log(leftProduct.views);
                
                
            }
        }
        
        
    }
    render();

    // console.log(totalClicks);
    
    // leftProduct.views++;
    // console.log(leftProduct);
    
    // midlleProduct.views++;
    // rightProduct.views++;
} else  {
    alert("Thanks for helping us you have reached the max attempts (25 votes) ")
        proudctSelction.removeEventListener('click',handleClickOnproudct);

}
}





//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }