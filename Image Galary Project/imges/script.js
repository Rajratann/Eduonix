let name, email, username;
let diceValues = [];
let diceRollCount = 0;

function register() {
    document.getElementById('form').style.display = 'block';
}

function submitForm() {
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    username = document.getElementById('username').value;

    // Hide the form and display image 2
    document.getElementById('form').style.display = 'none';
    document.getElementById('image2').style.display = 'inline';
}

function displayInfo() {
    document.getElementById('displayInfo').innerText = `Registered Name: ${name}, Username: ${username}`;
    document.getElementById('displayInfo').style.display = 'block';
    document.getElementById('image3').style.display = 'inline';
}

function rollDice() {
    if (diceRollCount < 3) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        diceValues.push(diceValue);
        diceRollCount++;

        document.getElementById('diceResult').innerText = `Dice Roll ${diceRollCount}: ${diceValue}`;
        document.getElementById('diceResult').style.display = 'block';

        if (diceRollCount === 3) {
            const diceSum = diceValues.reduce((total, value) => total + value, 0);
            if (diceSum > 10) {
                document.getElementById('image4').style.display = 'inline';
            } else {
                alert('Try again after scoring more than 10');
            }
        }
    } else {
        alert('Bad luck');
    }
}

function generateCoupon() {
    const coupon = Math.floor(100000000000 + Math.random() * 900000000000);
    document.getElementById('coupon').innerText = `Coupon Code: ${coupon}`;
    document.getElementById('coupon').style.display = 'block';

    
}