// Listen from Submit
document.getElementById('loan-form').addEventListener('submit', calculateResult);

function calculateResult(e){
    console.log('Caculating...');
    // UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayment = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatePayment);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = ((monthly * calculatePayment) - principal).toFixed(2);
    } else{
        // console.log("Please check your numbers");
        showError('Please check your numbers');       
    }

    e.preventDefault();
}

// Show Error
function showError(error) {
    // Create a Div
    const errorDiv = document.createElement('div');

    // Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
     
    // Add Class
    errorDiv.className = 'alert alert-danger';

    // Create Text node and apend to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert Error above heading
    card.insertBefore(errorDiv, heading);

    // clear Error after 3 seconds
    setTimeout(clearError, 3000);
}

// Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}