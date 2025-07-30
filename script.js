function calculateBill() {
    const units = parseFloat(document.getElementById("units").value);
    let rate = 0;

    if (isNaN(units) || units < 0) {
        alert("Please enter a valid number of units.");
        return;
    }

    // Realistic rates for Pakistani domestic consumers (unprotected)
    if (units <= 100) {
        rate = 22.44;
    } else if (units <= 200) {
        rate = 28.91;
    } else if (units <= 300) {
        rate = 33.10;
    } else {
        rate = 41.78;
    }

    const total = units * rate;

    document.getElementById("result").innerHTML =
        `You consumed <strong>${units}</strong> units.<br>` +
        `Rate per unit: <strong>Rs. ${rate.toFixed(2)}</strong><br>` +
        `Your total bill is: <strong>Rs. ${total.toFixed(2)}</strong>`;
}
