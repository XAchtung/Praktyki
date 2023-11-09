function solve(form){
    let word1 = form.input1.value;
    let word2 = form.input2.value;


    if(word1.length != word2.length){
        document.write("Nie są anagramem");
    }else{
        let result1 = 0;
        let result2 = 0;
        for(let i = 0; i < word1.length; i++){
            result1 += word1.charCodeAt(i);
        }
        for(let i = 0; i < word2.length; i++){
            result2 += word2.charCodeAt(i);
        }
        if(result1 === result2){
            document.write("Te słowa są anagramem")
        }else{
            document.write("Te słowa nie są anagramami")
        }
    }


    // document.write("<br>"+result1);
    // document.write("<br>"+result2);
}