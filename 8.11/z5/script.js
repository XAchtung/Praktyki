function sum(){
    let tab = [1, 4, 5];
    let result = 0;
    for(let i=0; i<tab.length; i++){
        if(typeof tab[i] == 'number'){
            result += tab[i];
        }
    }
    return result;
}
document.write(sum());