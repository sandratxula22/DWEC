console.log("pi: "+Math.PI);  // Resultado: 3.141592653589793
console.log("e: "+Math.E);  // Resultado: 2.718281828459045

console.log("Valor absoluto:")
console.log(Math.abs(-7));  // Resultado: 7
console.log(Math.abs(5));   // Resultado: 5

console.log("Seno, coseno y tangente:")
console.log(Math.sin(Math.PI / 2));  // Resultado: 1 (seno de 90 grados)
console.log(Math.cos(Math.PI));  // Resultado: -1 (coseno de 180 grados)
console.log(Math.tan(Math.PI / 4));  // Resultado: 1 (tangente de 45 grados)

console.log("exp: e elevado a x // logaritmo: ");
console.log(Math.exp(1));  // Resultado: 2.718281828459045 (e^1)
console.log(Math.exp(2));  // Resultado: 7.3890560989306495 (e^2)
console.log(Math.log(Math.E));  // Resultado: 1 (logaritmo natural de e)
console.log(Math.log(10));      // Resultado: 2.302585092994046 (logaritmo natural de 10)

console.log("Redondeo hacia arriba:");
console.log(Math.ceil(4.2));  // Resultado: 5
console.log(Math.ceil(-4.2)); // Resultado: -4

console.log("Redondeo hacia abajo/truncar:");
console.log(Math.floor(4.7));  // Resultado: 4
console.log(Math.floor(-4.7)); // Resultado: -5

console.log("Redondeo:");
console.log(Math.round(4.5));  // Resultado: 5
console.log(Math.round(4.4));  // Resultado: 4
console.log(Math.round(-4.6));  // Resultado: -5
console.log(Math.round(-4.5));  // Resultado: -4
console.log(Math.round(-4.4));  // Resultado: -4

console.log("Exponente:")
console.log(Math.pow(2, 3));  // Resultado: 8 (2^3)
console.log(Math.pow(5, 2));  // Resultado: 25 (5^2)

console.log("Max y min:")
console.log(Math.min(2, 5, 3, 7, 1, -1));  // Resultado: -1
console.log(Math.max(2, 5, 3, 7, 1, -1));  // Resultado: 7

console.log("Raíz cuadrada:")
console.log(Math.sqrt(25));  // Resultado: 5
console.log(Math.sqrt(9));   // Resultado: 3
console.log(Math.sqrt(-9));  // Resultado: NaN

console.log(Math.random());  // Resultado: un número entre 0 (inclusive) y 1 (exclusive)
// Número aleatorio entre 1 y 100
console.log(Math.floor(Math.random() * 100) + 1);  // Resultado: un número entre 1 y 100
