function calculate() {
  let cost = Number(document.getElementById("cost").value);
  let price = Number(document.getElementById("price").value);
  let quantity = Number(document.getElementById("quantity").value);

  if (cost <= 0 || price <= 0 || quantity <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid positive numbers.";
    return;
  }

  let totalCost = cost * quantity;
  let totalRevenue = price * quantity;
  let profit = totalRevenue - totalCost;

  // Fixed German VAT at 19%
  let germanTax = profit * 0.19;
  let profitAfterTax = profit - germanTax;
  let profitMargin = (profitAfterTax / totalRevenue) * 100;

  document.getElementById("result").innerHTML = `
    <strong>Total Cost:</strong> €${totalCost}<br>
    <strong>Total Revenue:</strong> €${totalRevenue}<br>
    <strong>Profit before tax:</strong> €${profit}<br>
    <strong>German Tax (19% VAT):</strong> €${germanTax.toFixed(2)}<br>
    <strong>Profit after tax:</strong> €${profitAfterTax}<br>
    <strong>Profit Margin:</strong> ${profitMargin.toFixed(2)}%
  `;
}
