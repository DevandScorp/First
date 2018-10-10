//http://www.codewars.com/kata/transportation-on-vacation/train/javascript
function rentalCarCost(d) {
    return d>=3&&d<7?d*40-20:d<3?d*40:d*40-50;
  }
console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));