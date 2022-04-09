class pig{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,50,  options);
        this.r = 50;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("black")
        strokeWeight(4)
        fill("blue");
        ellipse(0, 0, this.r);
        pop();
      }
    };
