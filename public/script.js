document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const bmi = urlParams.get('bmi');

    if (bmi !== null) {
        // If BMI is present in the URL, display it on the results page
        document.getElementById('result').style.display = 'block';
        document.getElementById('bmiResult').textContent = `Your BMI is ${bmi}`;
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const age = document.getElementById('age').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        // Check if the weight and height are valid numbers
        if (isNaN(weight) || isNaN(height)) {
            alert('Please enter valid weight and height.');
            return;
        }

        // Calculate BMI
        const calculatedBMI = calculateBMI(weight, height).toFixed(1);

        // Change the URL to include the BMI value without navigating to a new page
        const newURL = window.location.origin + '/results';
        window.history.replaceState(null, null, newURL);

        // Display the calculated BMI on the results section
        document.getElementById('result').style.display = 'block';
        document.getElementById('bmiResult').textContent = `${calculatedBMI}`;
    });

    // Function to calculate BMI
    function calculateBMI(weight, height) {
        const bmi = weight / ((height / 100) * (height / 100));
        return bmi;
    }
});
