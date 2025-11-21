function calculate() {
  let cost = Number(document.getElementById("cost").value);
  let price = Number(document.getElementById("price").value);
  let quantity = Number(document.getElementById("quantity").value);

  if (cost <= 0 || price <= 0 || quantity <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid values.";
    return;
  }

  let totalCost = cost * quantity;
  let totalRevenue = price * quantity;
  let profit = totalRevenue - totalCost;
  let margin = (profit / totalRevenue) * 100;
  let breakEven = Math.ceil(cost / (price - cost));

  document.getElementById("result").innerHTML = `
    <strong>Total Cost:</strong> €${totalCost}<br>
    <strong>Total Revenue:</strong> €${totalRevenue}<br>
    <strong>Profit:</strong> €${profit}<br>
    <strong>Profit Margin:</strong> ${margin.toFixed(2)}%<br>
  `;
}
