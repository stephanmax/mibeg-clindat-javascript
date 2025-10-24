// Ausdrücken / expressions: 1234 ** 2 => evaluiert zu einem Wert
// Anweisungen / statements: console.log(1234 ** 2) => hat einen Seiteneffekt

// Variablen-Scope, Variablen-Gültigkeitsbereich

const validOps = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
    "**": (a, b) => a ** b,
};

const calculate = (a, b, op) => validOps[op](a, b);

/* argv
    0 = Umgebung
    1 = Datei
    2 = Nutzer-Argumente
    3 = …
    4 = …
*/
const args = process.argv.slice(2);

const a = Number(args[0]);
const b = Number(args[2]);
const op = args[1];

// Prüfung: Anzahl der Argumente
if (args.length !== 3) {
    console.log("Unzulässige Zahl an Argumenten.");
    process.exit();
}

// Prüfung: Operator valide
if (!Object.keys(validOps).includes(op)) {
    console.log(`Bitte nur ${Object.keys(validOps).join(" ")} benutzen.`);
    process.exit();
}

// Prüfung: Beide Operanden sind Zahlen
if (isNaN(a) || isNaN(b)) {
    console.log("Einer der Operanden ist keine Zahl.");
    process.exit();
}

console.log("Ergebnis: " + calculate(a, b, op));