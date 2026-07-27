const rates = {
USD:1,
SAR:3.75,
EUR:0.86,
AED:3.67,
KWD:0.31,
QAR:3.64
};

function convert(){

let amount=parseFloat(document.getElementById("amount").value);

let from=document.getElementById("from").value;

let to=document.getElementById("to").value;

if(isNaN(amount)){
document.getElementById("result").innerHTML="أدخل مبلغاً صحيحاً";
return;
}

let usd=amount/rates[from];

let result=usd*rates[to];

document.getElementById("result").innerHTML=result.toFixed(2)+" "+to;

}

document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("dark");

this.innerHTML=document.body.classList.contains("dark")?"🌙":"☀️";

}
