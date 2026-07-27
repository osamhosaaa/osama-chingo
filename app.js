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
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const themeBtn = document.getElementById("themeBtn");

for (const code in names) {
    from.innerHTML += `<option value="${code}">${code} - ${names[code]}</option>`;
    to.innerHTML += `<option value="${code}">${code} - ${names[code]}</option>`;
}

from.value = "USD";
to.value = "SAR";

// تبديل العملات
document.getElementById("swapBtn").addEventListener("click", () => {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
});

// التحويل
document.getElementById("convertBtn").addEventListener("click", () => {

    if (amount.value.trim() === "") {
        result.innerHTML = "أدخل مبلغاً أولاً";
        return;
    }

    const value = Number(amount.value);

    const usd = value / rates[from.value];
    const converted = usd * rates[to.value];

    result.innerHTML =
        `${value} ${from.value} = <br><b>${converted.toFixed(2)} ${to.value}</b>`;
});

// الوضع النهاري والليلي
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "🌙";
    } else {
        themeBtn.innerHTML = "☀️";
    }
});
