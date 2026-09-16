const leftInput = document.getElementById('leftNum');
const operatorSelect = document.getElementById('operator');
const rightInput = document.getElementById('rightNum');
const submitBtn = document.getElementById('submitBtn');

function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

submitBtn.addEventListener('click', function () {
    const leftVal = leftInput.value;
    const rightVal = rightInput.value;

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const left = parseInt(leftVal, 10);
    const right = parseInt(rightVal, 10);
    const op = operatorSelect.value;

    if ((op === '/' || op === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (op) {
        case '+': result = left + right; break;
        case '-': result = left - right; break;
        case '*': result = left * right; break;
        case '/': result = left / right; break;
        case '%': result = left % right; break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert('Please, use me...');
}, 30000);
