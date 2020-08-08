class Ball{

    constructor(x,y,radius){
       
        var option ={
            
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body=Bodies.circle(x,y,radius,option)

        this.radius=radius
        World.add(world,this.body)
    }

    display(){
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("brown")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius)
        pop();
    }

}