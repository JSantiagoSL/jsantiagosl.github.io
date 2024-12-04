function calcular(operacao) {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const resultado = document.getElementById('resultado');
    const errorMessage = document.getElementById('error-message');

    num1.classList.remove('error');
    num2.classList.remove('error');
    errorMessage.textContent = '';

    if (num1.value === '') {
        errorMessage.textContent = 'Por favor, preencha o campo Número 1.';
        num1.classList.add('error');
        return;
    }
    if (num2.value === '') {
        errorMessage.textContent = 'Por favor, preencha o campo Número 2.';
        num2.classList.add('error');
        return;
    }

    const n1 = Number (num1.value);
    const n2 = Number (num2.value);
    let res;

    switch (operacao) {
        case 'somar':
            res = n1 + n2;
            break;
        case 'subtrair':
            res = n1 - n2;
            break;
        case 'multiplicar':
            res = n1 * n2;
            break;
        case 'dividir':
            if (n2 === 0) {
                alert('Divisão por zero não é permitida.');
                return;
            }
            res = n1 / n2;
            break;
        default:
            alert('Operação inválida.');
            return;
    }

    resultado.textContent = res;
}