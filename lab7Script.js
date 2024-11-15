function addition() {

    number1 = Number(num1.value);
    console.log(number1);
    number2 = Number(num2.value);
    console.log(number2);

    console.log(number1 + " + " + number2 + " = " + (number1 + number2));
    document.getElementById("textarea").textContent = number1 + " + " + number2 + " = " + (number1 + number2);

}

function subtract() {

    number1 = Number(num1.value);
    console.log(num1);

    number2 = Number(num2.value);
    console.log(num2);

    console.log(number1 + " - " + number2 + " = " + (number1 - number2));
    document.getElementById("textarea").textContent = number1 + " - " + number2 + " = " + (number1 - number2);

}

function multiply() {

    number1 = Number(num1.value);
    console.log(num1);

    number2 = Number(num2.value);
    console.log(num2);

    console.log(number1 + " * " + number2 + " = " + (number1 - number2));
    document.getElementById("textarea").textContent = number1 + " * " + number2 + " = " + (number1 * number2);



}

function divide() {
    number1 = Number(num1.value);
    console.log(num1);

    number2 = Number(num2.value);
    console.log(num2);

    console.log(number1 + " / " + number2 + " = " + (number1 - number2));
    document.getElementById("textarea").textContent = number1 + " / " + number2 + " = " + (number1 / number2);

}

