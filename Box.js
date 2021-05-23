class Box extends Block{
  constructor(x,y,width,height){
    super(x,y,width,height);
    //setting the visibility to the box
    this.image=loadImage("block.png")
    this.Visibility=255;
  }
  display(){
    console.log(this.body.speed);
    //writing the if condition to make the block invisible
     if(this.body.speed<5){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

      pop();
    }
  }
} 

