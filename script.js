// Курсы на 5 ноября 2026 (сколько белорусских рублей стоит 1 единица валюты)
let rates = {
  BYN: 1,
  RUB: 0.0364627,
  USD: 2.97790,
  EUR: 3.34000,
  CNY: 0.44418,
  PLN: 0.75340,
  UAH: 0.06540,
  KZT: 0.0065645,
  GBP: 3.99510,
  TRY: 0.05961
};

// Форматирует число: 1234567.891 → "1 234 567,89"
function format(n) {
  return n.toLocaleString('ru-RU', { maximumFractionDigits: 2 });
}

function convert() {
  let amount = parseFloat(document.getElementById('amount').value) || 0;
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;

  // Переводим всё через белорусский рубль
  let result = (amount * rates[from]) / rates[to];

  let resultEl = document.getElementById('result');
  resultEl.textContent = format(amount) + ' ' + from + ' = ' + format(result) + ' ' + to;
}