class Circle{
    constructor(radius = 1.0, color = "red")
    {
        this.radius = radius;
        this.color = color;
    }
    // get and set radius
    get Radius(){
        return this.radius;
    }
    set Radius(r){
        if(typeof r == Number)
        {
            return this.radius;
        }
        else{
            console.log("not a number");
        }
    }

    //get and set color

    get Color(){
        return this.color;
    }
    set Color(c){
        if(typeof c === String){
            return this.color;
        }
        else{
            console.log("not a string")
        }
    }

    //toString

    String(){
        console.log("Circle[radius="+ +this.radius +",color=" + this.color +"]");
    }
    // getting area
    get Area() {
        return Math.PI * this.radius * this.radius;
    }

    //getting circumference
    get Circumference() { 
        return 2 * (Math.PI) * this.radius }
}

const circle1 = new Circle();
console.log(circle1);
const circle2 = new Circle(2.0);
console.log(circle2);
const circle3 = new Circle(3.0 , "blue");
console.log(circle3);
console.log(circle3.Color);
console.log(circle2.Radius);
circle1.String();
console.log("Area", circle2.Area);
console.log("Circumference", circle3.Circumference);
