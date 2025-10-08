// Funktionsausdruck (expression)
const add = (a, b) => {
    return a + b;
};

// Funktionsdeklaration (Anweisung, statement)
// function add(a, b) {
//     return a+b;
// }

console.log(add(5, 10));

// Ausdrücke, z.B. 5, "Hallo", 5 < 10, 3 + 7, Funktionen
// Anweisungen, z.B. console.log("")

// Schreiben Sie eine Funktion `celsiusToFahrenheit()`, die Grad Celsius in Grad Fahrenheit umwandelt.

const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * (9/5)) + 32;
  return fahrenheit;
};