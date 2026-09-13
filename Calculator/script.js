let display = document.getElementById("display");

// Add value to display
function append(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        append(key);
    }

    // Operators
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        append(key);
    }

    // Enter
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape
    else if (key === "Escape") {
        clearDisplay();
    }

    // Percentage
    else if (key === "%") {
        append("%");
    }

});