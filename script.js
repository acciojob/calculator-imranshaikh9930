document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    let currentInput = '';

    // Function to update the input field
    function updateInput() {
        input.value = currentInput;
    }

    // Function to handle number and operation button clicks
    function handleButtonClick(value) {
        currentInput += value;
        updateInput();
    }

    // Function to handle equals button click
  function handleEquals() {
    try {
        currentInput = currentInput.replace(/[^-()\d/*+.]/g, '');
        currentInput = parseInt(eval(currentInput).toFixed(10)).toString();
    } catch (error) {
        currentInput = 'Error';
    }
    updateInput();
}

    // Function to handle clear button click
    function handleClear() {
        currentInput = '';
        updateInput();
    }

    // Add click event listeners to number buttons
    for (let i = 0; i <= 9; i++) {
        const button = document.getElementById(`block${i}`);
        button.addEventListener('click', () => handleButtonClick(i));
    }

    // Add click event listeners to operation buttons
    const operationButtons = document.querySelectorAll('.operation');
    operationButtons.forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button.textContent));
    });

    // Add click event listener to dot button
    document.getElementById('dot').addEventListener('click', () => {
        if (!currentInput.includes('.')) {
            handleButtonClick('.');
        }
    });

    // Add click event listener to equals button
    document.getElementById('ans').addEventListener('click', handleEquals);

    // Add click event listener to clear button
    document.getElementById('clr').addEventListener('click', handleClear);
});
