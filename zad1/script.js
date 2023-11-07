function solve(form){
    let num1 = parseFloat(form.input1.value);
    let num2 = parseFloat(form.input2.value);


    let wybierz = "";
    for(let i = 0; i<document.forms.calc.wybierz.length; i++){
        if(document.forms.calc.wybierz[i].checked) wybierz = document.forms.calc.wybierz[i].value;
    }

    if(wybierz == "option1"){
        document.getElementById("result").innerHTML = num1+num2;
    }else if(wybierz == "option2"){
        document.getElementById("result").innerHTML = num1-num2;
    }else if(wybierz == "option3"){
        document.getElementById("result").innerHTML = num1*num2;
    }else if(wybierz == "option4"){
        if(num1 == 0 || num2 == 0){
            document.getElementById("result").innerHTML = "NIE DZIEL PRZEZ 0!";
        }else{
            document.getElementById("result").innerHTML = num1/num2;
        }
    }
}