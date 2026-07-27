const rates = {
  SAR: 1,
  USD: 3.75,
  KWD: 12.1,
  EUR: 4.3,
  AED: 1.02,
  QAR: 1.03,
  BHD: 9.95,
  OMR: 9.74
};

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};

function conv() {
  const amt = parseFloat(document.getElementById("amt").value);
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (isNaN(amt)) {
    document.getElementById("r").innerText = "أدخل مبلغًا صحيحًا";
    return;
  }

  const result = (amt / rates[from]) * rates[to];
  document.getElementById("r").innerText =
    result.toFixed(2) + " " + to;
}
