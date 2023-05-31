function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
}

function calculate() {
    var display = document.getElementById("display");
    var expression = display.value;
    
    try {
        var result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "错误";
    }
}
