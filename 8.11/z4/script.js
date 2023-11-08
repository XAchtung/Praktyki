function Result (){
    let tab = [10, 11, "ania", 11];
    let result = tab.filter(Filter);
    document.write(result);
} 
function Filter (number){
    if(number === 11){
        return number;
    }else{
        return 0;
    }
}
Result();