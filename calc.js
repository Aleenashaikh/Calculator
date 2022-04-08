
var screen = document.getElementById('screen');
var screenValue = '';
function getvalue(val) {
    console.log(val)
    if (val != "=" && val!="C" && val != "sin" && val !="cos" && val!="tan" && val != "sqrt"){
    screenValue += val;
    screen.value +=val ;}
    else if (val == 'C') {
        screenValue = "";
        screen.value = "";
    }
    else if (val =="sin"){
        screenValue += sin();
        screen.value = val;
    }
    else if (val =="cos"){
        screenValue += cos();
        screen.value = val;
    }
    else if (val =="tan"){
        screenValue += tan();
        screen.value = val;
    }
    else if (val =="sqrt"){
        screenValue += sqrt();
        screen.value = val;
    }
     else if (val == '=') {
         console.log(screenValue)
        screen.value = eval(screenValue);
        screenValue = ""}  

}

function sin(){
    return "Math.sin"
}
function cos(){
    return "Math.cos"
}
function tan(){
    return "Math.tan"
}
function sqrt(){
    return "Math.sqrt"
}
