const rates = {
  USD: 1,
  SAR: 3.75,
  EUR: 0.86,
  AED: 3.67,
  KWD: 0.31
};

const names = {
  USD: "دولار أمريكي",
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

document.getElementById("swapBtn").onclick = () => {
  let temp = from.value;
  from.value = to.value;
  to.value = temp;
};

document.getElementById("convertBtn").onclick = () => {
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount)) {
    document.getElementById("result").innerText = "أدخل مبلغًا صحيحًا";
    return;
  }

  const usd = amount / rates[from.value];
  const result = usd * rates[to.value];

  document.getElementById("result").innerText =
    `${result.toFixed(2)} ${to.value}`;
};
