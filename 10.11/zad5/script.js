const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

//1
const Connect =(arr1, arr2)=> arr1.concat(arr2);
console.log(Connect(arr1, arr2));
//2
const lastElement = (arr) => arr.reverse()[0];
console.log(lastElement(arr1));
//3
const filterArray = (array, ends) => array.filter(name => name.endsWith(ends));
console.log(filterArray(arr2, 'ek'));
//4
const Sum =(arr)=>arr.reduce(function(total, currentValue){return total + currentValue;}, 0);
console.log(Sum(numbers));
//5
const Operation =(arr)=>arr.map(x => (x*x)+3);
console.log(Operation(numbers));

//Dodatkowe
//1
const Even =(arr)=> arr.filter(x => x%2 == 0);
console.log(Even(numbers));
//2
const recursionLowest =(arr)=>arr.reduce((lowest, current) => current < lowest ? current : lowest);
console.log(recursionLowest(numbers))
