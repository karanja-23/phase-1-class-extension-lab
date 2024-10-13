// Your code here
class Polygon {
    constructor(array){
        this.sides = array;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce(function(accumulator, element){
            return accumulator + element;
        },0)
    }
}
class Triangle extends Polygon {
    get isValid(){
        const [a, b, c] = this.sides;
        if (a + b > c && a + c > b && b + c > a){
            return true
        }
        else {
            return false;
        }
    }
}
class Square extends Polygon{
    get isValid(){
        const[a,b,c] = this.sides
        if(a===b && a ===c && b ===c){
            return true;
        }
        else{
            return false;
        }
    }
    get area (){
        return parseInt(this.sides) * parseInt(this.sides)
    }
}