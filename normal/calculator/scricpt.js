const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn[data-value]");
const form = document.getElementById("calculator");

// Append number/operator to display
buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.dataset.value;
    });
});

// Clear display (for your "C" button)
function clearDisplay() {
    display.value = "";
}

// Handle equals without reloading page
form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form reload
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "Error";
    }
});
