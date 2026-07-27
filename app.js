const rates = {
  USD: 1,
  SAR: 3.75,
  EUR: 0.86,
  AED: 3.67,
  KWD: 0.31
};

const names = {
  USD: "دولار",
  SAR: "ريال سعودي",
  EUR: "يورو",
  AED: "درهم إماراتي",
  KWD: "دينار كويتي"
};

const from = document.getElementById("from");
const to = document.getElementById("to");

for (let code in names) {
  from.innerHTML += `<option value="${code}">${names[code]}</option>`;
  to.innerHTML += `<option value="${code}">${names[code]}</option>`;
}

from.value = "USD";
to.value = "SAR";

function conv() {
  const amount = parseFloat(document.getElementById("amt").value);

  if (isNaN(amount)) {
    document.getElementById("r").innerText = "أدخل مبلغًا صحيحًا";
    return;
  }

  const result = amount / rates[from.value] * rates[to.value];

  document.getElementById("r").innerText =
    `${result.toFixed(2)} ${to.value}`;
}
