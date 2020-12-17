class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood1.png");
    this.visibility=255;
  }
  display(){
    if(this.body.speed<7){
      super.display();
    }
    else{
      push();
      World.remove(world,this.body)
      this.visibility=this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};
