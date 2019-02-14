var lines=[];   //the array of lines
var breadth=5;  //thickness of each line
var maxlenght=200;  //amplitude
var speed=2.5;    //transmission rate
var i;  //counter

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);   //comment this line to get variation
    for(i=0;i<25;i++)  {
        x = (i*(2*breadth));  //the x coordinates of the successive lines (needs to be calibrated [distances are not consistent])
        lines[i] = new Obj(x,height/2,speed,breadth,maxlenght);
    }
}

function draw() {
    background(0);
    for(i of lines) {
        i.move();
        i.show();
        i.highlight(); //only works with CENTER mode
    }
}

class Obj {
    constructor(x,y,xsp,breadth, maxlenght){
        this.x=x;
        this.y=y;
        this.xsp=xsp;
        this.breadth=breadth;
        this.gradient=(2*PI/width);     //play with the gradient to get variation
        this.maxlenght=maxlenght;
    }

    move() {
        if(this.x>width) this.x=0;
        this.angle=this.gradient*this.x;
        this.x+=this.xsp;
        this.lenght=Math.floor(Math.sin(this.angle)*this.maxlenght);
        //console.log('move() x: '+this.x+'  angle: '+this.angle);
    }

    show() {
        fill(255);      //for white lines
        //fill(random(255),random(255),random(255)); 
        rect(this.x,this.y,this.breadth,-this.lenght);
        //console.log('show() x: '+this.x+'  y: '+this.y);
    }

    highlight() {
        fill(255,0,255);
        rect(this.x,(this.y-(0.95)*(this.lenght/2)),this.breadth,((0.05*this.lenght)));
        fill(255,0,255);
        rect(this.x,(this.y+(0.95)*(this.lenght/2)),this.breadth,((0.05*this.lenght)));
    }
}
