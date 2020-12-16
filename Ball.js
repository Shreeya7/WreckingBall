class Ball
{
    constructor(x,y,radius,angle)
    {
var options = 
{
    density : 1.5,
    frictionAir : 0.005,
}

this.body = Bodies.circle(x,y,radius,options);
this.x = x;
this.y = y;
this.radius = radius;

World.add(world,this.body);
    }

display()
{
var angle = this.body.angle;
push();

translate(this.body.position.x,this.body.position.y);
rotate(angle);

ellipseMode(RADIUS);
fill("red");
ellipse(0,0,this.radius,this.radius);

pop();
}

}