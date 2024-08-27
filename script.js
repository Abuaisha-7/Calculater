const display = document.getElementById("displayer");

function appendToDisplay (input) {
 display.value += input;
}

function calculate () {
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDeasplay() {
    display.value = '' ;
}