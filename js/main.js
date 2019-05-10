//constants pulled from html
messageBox = document.getElementById("message");
addButton = document.getElementById("add");
subButton = document.getElementById("subtract");
inputBox = document.getElementById("iBox");

let display = 0;

//event listeners to buttons
addButton.addEventListener('click', add);
subButton.addEventListener('click', subtract);

function add(){
    if(inputBox.value === !NaN){
    display = parseInt(display) + parseInt(inputBox.value);
    messageBox.innerHTML = display; 
    inputBox.value = '';
    if(display <= -1){
        messageBox.style.color = 'red';
    } else if ( display >= 0){
        messageBox.style.color = 'black';
    };

}
}

function subtract(){
    if(inputBox.value === !NaN){
    display = parseInt(display) - parseInt(inputBox.value);
    messageBox.innerHTML = display;
    inputBox.value = '';
    if(display <= -1){
        messageBox.style.color = 'red';
    } else if ( display >= 0){
        messageBox.style.color = 'black';
    };
}
}

function init(){
    messageBox.innerHTML = display;
    inputBox.value = '';
}

init();