//Create variables here
var dog, dogImage0, dogImage1;
var database;
var foodStock;
var foods;
function preload()
{
  //load images here
  dogImage0 = loadImage("images/dogImg.png")
  dogImage1 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(400, 400);
  database = firebase.database();
  dog = createSprite(200,200)
  dog.addImage(dogImage0)
  dog.scale=0.5;
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}

function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(dogImage1)
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foods=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}




