
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




}
