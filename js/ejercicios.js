function ejercicio1() {
    const num1 = parseFloat(document.getElementById('num1_alg1').value);
    const num2 = parseFloat(document.getElementById('num2_alg1').value);
    const num3 = parseFloat(document.getElementById('num3_alg1').value);

    let resultado;
    if (num1 > 0) {
        resultado = num2 * num3;
    } else {
        resultado = num2 + num3;
    }

    document.getElementById('result').innerText = `Resultado: ${resultado}`;
}

function ejercicio2() {
    const num1 = parseFloat(document.getElementById('num1_alg2').value);
    const num2 = parseFloat(document.getElementById('num2_alg2').value);
    const num3 = parseFloat(document.getElementById('num3_alg2').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result2').innerText = 'Por favor, ingresa los tres números.';
        return;
    }

    let mensaje = 'Ningún número es igual a la suma de los otros dos.';
    if (num1 === num2 + num3) {
        mensaje = 'El primer número es igual a la suma de los otros dos.';
    } else if (num2 === num1 + num3) {
        mensaje = 'El segundo número es igual a la suma de los otros dos.';
    } else if (num3 === num1 + num2) {
        mensaje = 'El tercer número es igual a la suma de los otros dos.';
    }

    document.getElementById('result2').innerText = mensaje;
}

function ejercicio3() {
    let suma = 0;
    let serie = '';
    for (let i = 3; i < 100; i += 3) {
        serie += i + ', ';
        suma += i;
    }
    serie = serie.slice(0, -2);
    document.getElementById('output3').innerText = `Multilpos de 3 (entre 1 y 100): ${serie}\nSuma: ${suma}`;
}

function ejercicio4() {
    let potencia = 1;
    let resultado = '';
    while (potencia <= 100) {
        resultado += potencia + ', ';
        potencia *= 2;
    }
    resultado = resultado.slice(0, -2);
    document.getElementById('output4').innerText = `Potencias de 2 (entre 1 y 100): ${resultado}`;
}

function ejercicio5() {
    let suma = 0;
    for (let i = 50; i <= 200; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }
    document.getElementById('output5').innerText = `Suma de números pares entre 50 y 200: ${suma}`;
}

function ejercicio6() {
    const celsius = 25; // Valor fijo, no se pide al usuario
    const fahrenheit = (9 / 5) * celsius + 32;
    document.getElementById('output6').innerText = `${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F`;
}

function ejercicio7() {
    const hora24 = 24; // Valor fijo, no se pide al usuario
    const ampm = hora24 >= 12 ? 'p.m.' : 'a.m.';
    const hora12 = hora24 % 12 === 0 ? 12 : hora24 % 12;
    document.getElementById('output7').innerText = `Hora en formato 24 horas: las ${hora24} horas es igual a ${hora12} ${ampm}`;
}

function ejercicio8() {
    const vector = ['uno', 'dos', 'tres', 'cuatro', 'cinco']; // Valores fijos
    const invertido = [...vector].reverse();
    document.getElementById('output8').innerText = `Vector original: ${vector.join(', ')}\nVector invertido: ${invertido.join(', ')}`;
}

function ejercicio9() {
    const notas = [7.5, 8.0, 6.5, 9.0, 10]; // Notas fijas
    const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
    const mayor = Math.max(...notas);
    const menor = Math.min(...notas);

    document.getElementById('output9').innerText =
        `Notas: ${notas.join(', ')}\nPromedio: ${promedio.toFixed(2)}\nMayor nota: ${mayor}\nMenor nota: ${menor}`;


}

function ejercicio10() {
    const matriz = [
        [2, 4, 6, 8],
        [1, 3, 5, 7],
        [9, 11, 13, 15]
    ];

    let resultado = 'Matriz original:\n';
    matriz.forEach(fila => {
        resultado += fila.map(num => String(num).padStart(2, ' ')).join(' ') + '\n';
    });

    resultado += '\nSuma por fila:\n';
    for (let i = 0; i < matriz.length; i++) {
        const sumaFila = matriz[i].reduce((a, b) => a + b, 0);
        resultado += `Fila ${i + 1}: ${sumaFila}\n`;
    }

    resultado += '\nSuma por columna:\n';
    for (let j = 0; j < matriz[0].length; j++) {
        let sumaCol = 0;
        for (let i = 0; i < matriz.length; i++) {
            sumaCol += matriz[i][j];
        }
        resultado += `Columna ${j + 1}: ${sumaCol}\n`;
    }

    document.getElementById('output10').innerText = resultado;
}