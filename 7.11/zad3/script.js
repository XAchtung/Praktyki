function solve(){
    let tab1 = [1, 5 ,10 ,15];
    let tab2 = [1,1, 3, 3, 4 ,4, 4];
    let tab3 = ["ala", "robert", "stanislaw"];

    BubbleSort(tab1);
    document.write("<br>" + SecondMax(tab1) + "<br>");
    BubbleSort(tab2);
    document.write("<br>" + SecondMax(tab2) + "<br>");
    BubbleSort(tab3);
    document.write("<br>" + SecondMax(tab3) + "<br>");
}

function BubbleSort(arr) {   
    for (let i = 0; i < arr.length; i++) {  
        for (let j = 0; j < (arr.length - i - 1); j++) { 
            if (arr[j] > arr[j + 1]) { 
                let temp = arr[j] 
                arr[j] = arr[j + 1] 
                arr[j + 1] = temp 
            } 
        } 
    }  
    document.write(arr); 
}

function SecondMax(arr){
    let max =0;
    let secondMax = 0;

    for(let i = 0; i <arr.length; i++){
        if(typeof arr[i] == "number"){
            max = arr[i];
            for(let j = 0; j<(arr.length); j++){
                if(arr[j] > max){
                    max = arr[j];
                    secondMax = arr[j-1];
                }
            }
            return secondMax;
        }else if(typeof arr[i] == "string"){
            max = arr[i];
            for(let j = 0; j<(arr.length); j++){
                if(arr[j].length > max.length){
                    max = arr[j];
                    secondMax = arr[j-1];
                }
            }
            return secondMax;
        }
    }
}