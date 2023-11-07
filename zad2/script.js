function solve(form){
    let word = form.input1.value;

    // document.getElementById("result").innerHTML = Palindrome(word);
    if(word === Palindrome(word)){
        document.getElementById("result").innerHTML = "True";
    }else{
        document.getElementById("result").innerHTML = "False";
    }
}

const Palindrome =(word)=>{
    let result = "";
    for(let i = word.length-1; i>=0; i--){
        result = result + word[i];
    }
    return result;
}