function performArithmetic() {
    const firstarithmeticnumber = Number(document.forms.ArithmeticForm.firstarithmeticnumber.value);
    const secondarithmeticnumber = Number(document.forms.ArithmeticForm.secondarithmeticnumber.value);
    const arithmeticoperator = document.forms.ArithmeticForm.arithmeticoperator.value;
    let arithmeticresult = 0;
    switch(arithmeticoperator) {
        case 'Addition':
            arithmeticresult = firstarithmeticnumber + secondarithmeticnumber;
            alert (`The result of adding ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}.`);
            break;
        case 'Subtraction':
            arithmeticresult = firstarithmeticnumber - secondarithmeticnumber;
            alert (`The result of subtracting ${secondarithmeticnumber} from ${firstarithmeticnumber} is ${arithmeticresult}.`);
            break;
        case 'Multiplication':
            arithmeticresult = firstarithmeticnumber * secondarithmeticnumber;
            alert (`The result of multiplying ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}.`);
            break;
        case 'Division':
            if (secondarithmeticnumber == 0) {
                alert('Cannot divide by zero!');
                break;
            } else {
                arithmeticresult = firstarithmeticnumber / secondarithmeticnumber;
                alert (`The result of dividing ${secondarithmeticnumber} out of ${firstarithmeticnumber} is ${arithmeticresult}.`);
                break;
            }
    }
}

function performFactorial() {
    const factorialnumber = Number(document.forms.FactorialForm.factorialnumber.value);
    let factorialresult = 0;
    if (factorialnumber < 0) {
        alert('Cannot calculate the factorial of a negative!');
        return;
    } else if (factorialnumber === 0) {
        alert(`The factorial of ${factorialnumber} is 1.`);
        return;
        } else {
            factorialresult = 1;
            for (i = 1; i<= factorialnumber; i++) {
                factorialresult *= i;
            }
        }
    alert(`The factorial of ${factorialnumber} is ${factorialresult}.`);
}

function performFibonacci() {
    const fibonaccinumber = Number(document.forms.FibonacciForm.fibonaccinumber.value);
    let num1 = 0;
    let num2 = 1;
    let result = 0;
    if (fibonaccinumber < 0) {
        alert('Cannot calculate number because of negative!');
        return;
    } else if (fibonaccinumber === 0) {
            alert(`The nth Fibonacci number for ${fibonaccinumber} is 0.`);
            return;
        } else {
            for (i = 2; i <= fibonaccinumber; i++) {
                result = num1 + num2;
                num1 = num2
                num2 = result;
            }
        }
    alert(`The nth Fibonacci number for ${fibonaccinumber} is ${result}`);
}

function performrange() {
    const num1 = Number(document.forms.RangeForm.num1.value);
    const num2 = Number(document.forms.RangeForm.num2.value);
    const num3 = Number(document.forms.RangeForm.num3.value);
    let range = 0;
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    range = max - min;
    alert (`
        The minimum is ${min}.
        The maximum is ${max}.
        The range between ${min} and ${max} is ${range}.`);
}

function addSignup() {
    var firstName = document.SignupForm.firstname.value;
    var lastName = document.SignupForm.lastname.value;
    var email = document.SignupForm.email.value;
    var ZIP = document.SignupForm.zipcode.value;
    var signupInfo =
    '<br><div>First Name: ' + firstName +
    '<br>Last Name: ' + lastName +
    '<br>Email: ' + email +
    '<br>ZIP: ' + ZIP + '</div>' ;
    document.getElementById("signupList").innerHTML += signupInfo;
}