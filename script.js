/* script.js */
const texts = {
en: {
title: "Business Profit Calculator",
cost: "Cost per item (€)",
price: "Selling price per item (€)",
quantity: "Quantity sold",
calc: "Calculate",
error: "Please enter valid positive numbers."
},
de: {
title: "Gewinnrechner für Unternehmen",
cost: "Kosten pro Stück (€)",
price: "Verkaufspreis pro Stück (€)",
quantity: "Verkaufte Menge",
calc: "Berechnen",
error: "Bitte gültige positive Zahlen eingeben."
},
ar: {
title: "حاسبة الأرباح التجارية",
cost: "تكلفة القطعة (€)",
price: "سعر البيع (€)",
quantity: "الكمية المباعة",
calc: "احسب",
error: "الرجاء إدخال أرقام صحيحة."
}
};


function updateLanguage() {
const lang = document.getElementById("language").value;
document.getElementById("title").innerText = texts[lang].title;
document.getElementById("costLabel").innerText = texts[lang].cost;
document.getElementById("priceLabel").innerText = texts[lang].price;
document.getElementById("quantityLabel").innerText = texts[lang].quantity;
document.getElementById("calcBtn").innerText = texts[lang].calc;
}


function calculate() {
const cost = Number(cost.value);
const price = Number(price.value);
const quantity = Number(quantity.value);
const lang = language.value;


if (cost <= 0 || price <= 0 || quantity <= 0) {
result.innerText = texts[lang].error;
return;
}


const revenue = price * quantity;
const profit = (price - cost) * quantity;


let taxRate = 0;
if (tax.value === "de") taxRate = 0.19;
