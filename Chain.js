class Chain {
 
    constructor (bodyA,bodyB) {


      var kg = {

        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.004,
        length: 50

       }

       this.chain = Constraint.create(kg)
       World.add (world,this.chain)


    }

       display() {

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(5);

        line(pointA.x,pointA.y,pointB.x,pointB.y);


       }


}