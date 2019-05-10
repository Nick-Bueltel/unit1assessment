//constants pulled from html
messageBox = document.getElementById("message");
addButton = document.getElementById("add");
subButton = document.getElementById("subtract");
inputBox = document.getElementById("iBox");

let display = 0;

//event listeners to buttons
addButton.addEventListener('click', addCheck);
subButton.addEventListener('click', subtractCheck);
function addCheck(){
    if(inputBox.value === ''){
        return; 
    } else {
        add();
    }
}

function subtractCheck(){
    if(inputBox.value === ''){
        return; 
    } else {
        subtract();
    }
}
function add(){
    display = parseInt(display) + parseInt(inputBox.value);
    messageBox.innerHTML = display; 
    inputBox.value = '';
    if(display <= -1){
        messageBox.style.color = 'red';
    } else if ( display >= 0){
        messageBox.style.color = 'black';
    
    }
    resetButtons();
}

function subtract(){
    display = parseInt(display) - parseInt(inputBox.value);
    messageBox.innerHTML = display;
    inputBox.value = '';
  
    if(display <= -1){
        messageBox.style.color = 'red';
    } else if ( display >= 0){
        messageBox.style.color = 'black';
    }
    resetButtons();
}

function resetButtons(){
    addButton.disabled = false; 
    subButton.disabled = false; 
}

function init(){
    messageBox.innerHTML = display;
    inputBox.value = '';
}



init();