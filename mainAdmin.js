let targetNumber = 5000;
let zielInputValue = 0;

function updateZiel() {
    const zielInput = document.getElementById("zielInput");
    zielInputValue = parseInt(zielInput.value) || 0;
    updateProgressBar();
}

function updateProgressBar() {
    const numberInput = document.getElementById("numberInput");
    const filler = document.getElementById("filler");
    const percentageText = document.getElementById("percentageText");

    const enteredNumber = parseInt(numberInput.value) || 0;

    if (!isNaN(enteredNumber)) {
        if (enteredNumber >= zielInputValue) {
            filler.style.width = "100%";
            percentageText.innerText = "100%";
        } else {
            const percentage = (enteredNumber / zielInputValue) * 100;
            filler.style.width = percentage + "%";
            // toLocaleString kullanarak virgül ile ayırma
            percentageText.innerText = percentage.toLocaleString('en-US', { maximumFractionDigits: 2 }) + "%";
        }
    }
}