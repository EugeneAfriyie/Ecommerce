const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Regular expression to validate different US phone number formats
const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

checkBtn.addEventListener("click", () => {
    const inputValue = userInput.value.trim();

    if (!inputValue) {
        alert("Please provide a phone number");
        return;
    }

    if (phoneRegex.test(inputValue)) {
        resultsDiv.textContent = `Valid US number: ${inputValue}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${inputValue}`;
    }
});

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
    userInput.value = "";
});