document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const submitBtn = document.getElementById("submitBtn");
    const outputContainer = document.getElementById("output-container");

    submitBtn.addEventListener("click", function() {
        const inputNumber = parseFloat(numberInput.value);
        
        if (!isNaN(inputNumber) && inputNumber >= 0) {
            // Clear previous output
            outputContainer.innerHTML = "";

            // Display the image inputNumber times
            for (let i = 0; i < inputNumber; i++) {
                const image = document.createElement("img");
                image.src = "GPID_1009988526_00.jpg"; // Replace with the actual image path
                image.alt = "Image";
                outputContainer.appendChild(image);
            }
        } else {
            alert("Please enter a valid non-negative number.");
        }
    });
});
