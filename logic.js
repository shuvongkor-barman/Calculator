// Get value from the display
var box = document.getElementById('display');



function addToScreen(x){
    box.value += x;
    
    if(x == 'c'){
        box.value = "";
    }
}

function answer(){
    x = box.value;
    x = eval(x);
    box.value = x;
}

function backspace(){
    var input = box.value;
    var inputLength = input.length - 1;
    var newInput = input.substring(0, inputLength);
    box.value = newInput;

}


function squareRoot(){
    x = box.value;    
    x = eval(x);
   const y = '';
    if(isNaN(x)){
        box.value = "Enter a number first ";       
    }
    else{
    x = Math.sqrt(x);
    box.value = x;    
    }
}

function showTheMaker(){
    box.value = '';
    box.value = "Made by Shuvongkor "
}


