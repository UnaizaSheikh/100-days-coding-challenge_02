//function of area of rectangle
function rectangleArea(length: number, bredth: number): number {
  return length * bredth;
}
//resfactoring this to arrow function
let rectangleArea1 = (length: number, bredth: number): number =>
  length * bredth;
console.log(rectangleArea1(10, 8));
