let tab = [10, 11, "ania", 11];

function Filter (number, filtr){
    var r = new Array();
    for (let i = 0; i < number.length; i++) {
        if(number[i] == filtr){
            r.push(number[i]);
        }
    }
    return r;
}
console.log(Filter(tab, 11));