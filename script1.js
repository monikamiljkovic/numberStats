//TRY AGAIN FUNCTION
let tryAgain = function (num) {
  if (num == "Y") {
    return numberStats();
  } else {
    return "BYE";
  }
};

function numberStats() {
  let num = prompt("Write a number");
  if (num === undefined || num === "") {
    alert("Input is not filled");
    let promptNew = prompt(
      "do you want to try again? Click Y to try again, X to exit"
    );
    if (promptNew != undefined) {
      tryAgain(promptNew);
    }
  } else if (onlyLettersAndSpaces(num)) {
    alert("It's not a number");
  } else {
    const divTypeOfNumber = document.createElement("div");
    let positiveOrNegative = num > 0 ? "Positive" : "Negative";
    let integerOrDecimal = num % 1 != 0 ? "Decimal" : "Integer";
    let oddOrEven = num % 2 == 0 ? "Even" : "Odd";
    let h4 = divTypeOfNumber.appendChild(document.createElement("h4"));
    let ul = document.createElement("ul");
    let li_PositiveOrNeg = ul.appendChild(document.createElement("li"));
    let li_IntegerOrDec = ul.appendChild(document.createElement("li"));
    let li_OddOrEven = ul.appendChild(document.createElement("li"));
    h4.innerHTML = `Stats of number: ${num}`;

    li_PositiveOrNeg.innerHTML = positiveOrNegative;
    li_IntegerOrDec.innerHTML = integerOrDecimal;
    li_OddOrEven.innerHTML = oddOrEven;
    document.body.appendChild(divTypeOfNumber);
    divTypeOfNumber.appendChild(ul);
  }
}
numberStats();

function onlyLettersAndSpaces(str) {
  return /^[A-Za-z\s]*$/.test(str);
}
