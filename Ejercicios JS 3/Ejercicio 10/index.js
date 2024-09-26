let num1 = '';
        let num2 = '';
        let operador = '';

        function agregarNumero(numero) {
            if (operador) {
                num2 += numero;
                actualizarResultado(num2);
            } else {
                num1 += numero;
                actualizarResultado(num1);
            }
        }

        function operacion(op) {
            if (num1) {
                operador = op;
            }
        }

        function calcular() {
            let resultado;
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);

            if (operador === '+') {
                resultado = n1 + n2;
            } else if (operador === '-') {
                resultado = n1 - n2;
            } else if (operador === '*') {
                resultado = n1 * n2;
            } else if (operador === '/') {
                resultado = (n2 === 0) ? "Error: División por cero" : n1 / n2;
            }

            resetear();
            actualizarResultado(resultado);
        }

        function actualizarResultado(valor) {
            document.getElementById('resultado').innerText = valor;
        }

        function resetear() {
            num1 = '';
            num2 = '';
            operador = '';
            actualizarResultado('0');
        }