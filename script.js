function calculateBill() {
  const units = parseFloat(document.getElementById("units").value);
  let totalBill = 0;
  let resultText = "";

  if (isNaN(units) || units <= 0) {
    resultText = "Please enter a valid number of units.";
  } else {
    let remaining = units;

    // Sample WAPDA-style slab rates
    if (remaining <= 100) {
      totalBill += remaining * 5.79;
      resultText += `${remaining} units @ Rs 5.79 = Rs ${totalBill.toFixed(2)}<br>`;
    } else {
      totalBill += 100 * 5.79;
      resultText += `100 units @ Rs 5.79 = Rs ${ (100 * 5.79).toFixed(2) }<br>`;
      remaining -= 100;

      if (remaining <= 100) {
        totalBill += remaining * 8.11;
        resultText += `${remaining} units @ Rs 8.11 = Rs ${(remaining * 8.11).toFixed(2)}<br>`;
      } else {
        totalBill += 100 * 8.11;
        resultText += `100 units @ Rs 8.11 = Rs ${(100 * 8.11).toFixed(2)}<br>`;
        remaining -= 100;

        // Above 200 units
        totalBill += remaining * 10.20;
        resultText += `${remaining} units @ Rs 10.20 = Rs ${(remaining * 10.20).toFixed(2)}<br>`;
      }
    }

    // Add fixed charges
    const fixedCharges = 35;
    const gst = totalBill * 0.17;

    resultText += `<br>Fixed Charges: Rs ${fixedCharges.toFixed(2)}`;
    resultText += `<br>GST (17%): Rs ${gst.toFixed(2)}`;

    totalBill += fixedCharges + gst;

    resultText += `<br><strong>Total Bill: Rs ${totalBill.toFixed(2)}</strong>`;
  }

  document.getElementById("result").innerHTML = resultText;
}
