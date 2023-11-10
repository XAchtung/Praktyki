const arr1 = ["Anna", "Maria", "Marek", "Tomasz"];

const fil = (arr) => arr.filter(name => name.length <= 5 && name.endsWith('ek'));
console.log(fil); 