// 1. Проверить правильность расстановки скобок в строке

document.getElementById('brackets-input').addEventListener('input', checkInputBrackets)

function isBracketsCorrect(str) {
    let brackets = '';

    for (let i = 0; i < str.length; ++i) {
        if (str[i] == '(' || str[i] == ')') {
            brackets += str[i];
        }
    }

    for (let i = 0; i < brackets.length; ++i) {
        if (brackets[i] == '(' && brackets[i + 1] == ')') {
            let arr = brackets.split('');
            arr.splice(i, 2);
            brackets = arr.join('');
            i -= 2;
        }
    }

    if (brackets) return false;
    return true;
}

function checkInputBrackets(e) {
    const input = e.target.value;
    const answer = document.getElementById('answer');
    
    input ? 
        (answer.innerText = isBracketsCorrect(input) ? 
            'Скобки расставлены верно' : 'Скобки расставлены неверно') :
        answer.innerText = '';
}