function printMousePos(event) {
    alert("clientX: " + event.clientX +
        " - clientY: " + event.clientY);
}
  
document.addEventListener("click", printMousePos);


function KeyPressCheck(event){
    //console.log('pressed::'+ event.keyCode);
    alert('pressed::'+ event.keyCode);
}

document.addEventListener("keypress", KeyPressCheck);