var wallpaper,wallpaperimg;
var box1;
var song1,song2,song3,song4,song5,song6,song7;


function Preload(){

wallpaperimg = loadImage("Wallpaper.jpg");    
song1 = loadSound("52 gaj ka daman.mp3");
song2 = loadSound("Coca Cola.mp3");
song3 = loadSound("Goa Beach.mp3");
song4 = loadSound("Kalle Kalle.mp3");
song5 = loadSound("Lehanga.mp3");
song6 = loadSound("Nikle Current.mp3");
song7 = loadSound("Titliaan.mp3");

}
function setup(){
createCanvas(1360,600);

wallpaper = createSprite(1360,600);
wallpaper.addImage(wallpaperimg);

box1 = createSprite(200,200,50,50);
box1.shapeColor = "red";



}
function draw(){
    
drawSprites();    
}