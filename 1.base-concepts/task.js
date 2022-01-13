"use strict"
function solveEquation(a, b, c) {
  // ax^2+bx+c = 0
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    arr = [];
    return arr;
  } else if (D == 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let nowDate = new Date();
  let percentN = +percent;
  let contributionN = +contribution;
  let amountN = +amount;
  if (Number.isNaN(percentN)) {
    let error = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return error;
  };
  if (Number.isNaN(contributionN)) {
    let error = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return error;
  };
  if (Number.isNaN(amountN)) {
    let error = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return error;
  };
  let fractionalPercent = percentN / 100;
  let creditBody = amountN - contributionN; // тело кредита
  let numberOfMonthes = monthDiff(nowDate, date); // количество месяцев
  let oneTwelfthOfPercent = fractionalPercent / 12;  // 1/12 процентной ставки
  let monthlyLoanPayment = creditBody * (oneTwelfthOfPercent + (oneTwelfthOfPercent / (((1 + oneTwelfthOfPercent) ** numberOfMonthes) - 1)));  // ежемесячная плата
  let totalAmountFull = monthlyLoanPayment * numberOfMonthes;
  let totalAmount;
  if (contributionN === amountN) {
    totalAmount = 0
  } else {
    totalAmount = +(totalAmountFull.toFixed(2));
  }
  console.log(totalAmount);
  return totalAmount;
}

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
