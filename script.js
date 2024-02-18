//declaring Variables

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanArabicMapping = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
convertBtn.addEventListener("click", () => {
  let number = numberInput.value;
  let arabicNumeralDetected = [];
  let romanNumerals = [];

  // Überprüfen ob man einen gültigen Wert eingegeben hat

  if (number === "") {
    output.innerHTML = `<p>Please enter a valid number.</p>`;
    output.classList.add("alert");
    output.classList.remove("output");
  } else if (number <= 0) {
    output.innerHTML = `<p>Please enter a number greater than or equal to 1.</p>`;
    output.classList.add("alert");
    output.classList.remove("output");
  } else if (number > 3999) {
    output.innerHTML = `<p>Please enter a number less than or equal to 3999.</p>`;
    output.classList.add("alert");
    output.classList.remove("output");
  } else {
    for (let i = 0; i < arabicNumerals.length; i++) {
      while (number >= arabicNumerals[i]) {
        const remainder = number - arabicNumerals[i];
        const arabicNumber = number - remainder;
        number = remainder;
        arabicNumeralDetected.push(arabicNumber);
      }
    }
    arabicNumeralDetected.forEach(function (element) {
      for (let i = 0; i < arabicNumerals.length; i++) {
        if (element === arabicNumerals[i]) {
          romanNumerals.push(romanArabicMapping[arabicNumerals[i]]);
        }
        const romanNumeralsFinal = romanNumerals.join("");
        output.innerHTML = `<p>${romanNumeralsFinal}</p>`;
        output.style.display = "block";
        output.classList.add("output");
        output.classList.remove("alert");
      }
    });
  }
});

// Array leeren, wenn ein neuer Wert eingegeben wird

numberInput.addEventListener("input", function () {
  arabicNumeralDetected = [];
});
