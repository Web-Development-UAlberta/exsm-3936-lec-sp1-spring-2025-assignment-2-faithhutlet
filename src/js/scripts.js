
async function main() {

class Shape{
  constructor(colour){
    if(new.target === Shape){
      throw new Error("Cannot instantiate abstract class.");
    }
    this.colour = colour;
  }

  get area(){
    throw new Error("Area implemented by child class");
  }
  get perimeter(){
    throw new Error("Perimeter implemented by child class");
  }
  contain(){
    throw new Error("Contain implemented by child class");
  }
}

class Rectangle extends Shape{
  constructor(length, width, colour){
    super(colour);
    this.length = length;
    this.width = width;
  }
  get area(){
    return this.length * this.width;
  }
  get perimeter(){
    return 2* (this.length + this.width);
  }
  get isSquare(){
    return this.length === this.width;
  }
  contain(){
    const side = Math.max(this.length, this.width);
    return new Rectangle(side, side, this.colour);
  }
}



}
