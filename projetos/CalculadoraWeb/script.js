// ========================================
// Calculadora Web - Funcionalidades
// ========================================

let display = document.getElementById('display');
let expression = '';

// Adicionar número ao display
function appendNumber(num) {
    // Evita múltiplos zeros no início
    if (display.value === '0' && num !== '.') {
        display.value = num;
        expression = num;
    } else {
        display.value += num;
        expression += num;
    }
}

// Adicionar operador
function appendOperator(operator) {
    const lastChar = expression.slice(-1);
    
    // Substitui operador anterior se necessário
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        expression = expression.slice(0, -1) + operator;
        display.value = display.value.slice(0, -1) + operator;
    } else {
        expression += operator;
        display.value += operator;
    }
}

// Adicionar decimal
function appendDecimal() {
    const currentNumber = expression.split(/[\+\-\*\/%]/).pop();
    if (!currentNumber.includes('.')) {
        if (currentNumber === '') {
            display.value += '0.';
            expression += '0.';
        } else {
            display.value += '.';
            expression += '.';
        }
    }
}

// Limpar display
function clearDisplay() {
    display.value = '0';
    expression = '';
}

// Apagar último caractere
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
        expression = expression.slice(0, -1);
    } else {
        display.value = '0';
        expression = '';
    }
}

// Calcular resultado
function calculate() {
    try {
        // Substitui vírgula por ponto para cálculo
        let calcExpression = expression.replace(/,/g, '.');
        
        // Avalia a expressão
        let result = eval(calcExpression);
        
        // Formata o resultado
        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(2).replace('.', ',');
        }
        
        expression = result.toString();
    } catch (error) {
        display.value = 'Erro';
        expression = '';
        
        // Limpa após 1.5 segundos
        setTimeout(() => {
            display.value = '0';
        }, 1500);
    }
}

// Permitir uso do teclado
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '.') {
        appendDecimal();
    } else if (e.key === '+') {
        appendOperator('+');
    } else if (e.key === '-') {
        appendOperator('-');
    } else if (e.key === '*') {
        appendOperator('*');
    } else if (e.key === '/') {
        appendOperator('/');
    } else if (e.key === '%') {
        appendOperator('%');
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === 'Backspace') {
        deleteLast();
    }
});

console.log('🧮 Calculadora Web - Eliane Lunguinho');

