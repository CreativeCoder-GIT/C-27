class Rope
{
  constructor(BodyA,BodyB)
  {
      var options = {
          bodyA:BodyA,
          bodyB:BodyB,
          stiffness:0.01,
          length:70
      }

      this.rope = Constraint.create(options);
      World.add(world, this.rope)
  }

  display()
  {
    var posA= this.rope.bodyA.position;
    var posB=this.rope.bodyB.position;

    push();
    strokeWeight(2)
    line(posA.x, posA.y, posB.x, posB.y)
    pop();

  }
  
}