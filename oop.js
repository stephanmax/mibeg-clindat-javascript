// Objektorientierte Programmierung
// Object-Oriented Programming
// OOP

// - Klassen und ihre Instanzen (= Objekte), class + new
// - Vererbung, extends + super
// - Kapselung, #
// (- Polymorphismus)

/*

Klasse Person
    Attribute
        - Name
        - Alter
        - Wohnort
    Methoden
        - Begrüßen
        - Umziehen (Wohnort wechseln)
        - Krankenhausbehandlung
        - Altern

Klasse SchülerIn, erbt von Person
    Attribute
        - Klassenstufe
        - Noten
        - Lieblingsfach
    Methode
        - In die Pause gehen
        - Nächste Klassenstufe besuchen

Klasse LehrerIn, erbt von Person
    Attribute
        - KlassenlehrerIn
        - Urlaubsanspruch
    Methoden
        - In den Unterricht gehen
        - Klassenbuch führen

        Person
       /      \
    Schüler  Lehrer
    /   \     /   \

    function inDenUrlaubFahren(Person) {
        …
    }

    inDenUrlaubFahren(schueler);
    inDenUrlaubFahren(lehrer);
*/

// Motivation für Objekte: Gruppierung von Daten

// const pointX = 5;
// const pointY = 42;

const point = {
    x: 5,
    y: 42
};

// Motivation für Klassen: Bauanleitung für Objekte

// const stephan = {
//     name: "Stephan",
//     age: 37,
//     location: "Cologne",
//     greet(message) {
//         console.log(`${message}, ich bin ${this.name}!`);
//     }
// };

// const peter = {
//     name: "Peter",
//     age: 54,
//     location: "Hamburg",
//     greet() {
//         console.log(`Hallo, ich bin ${this.name}!`);
//     }
// };

// const swantje = {
//     name: "Swantje",
//     age: 25,
//     location: "Lüneburg",
//     greet() {
//         console.log(`Hallo, ich bin ${this.name}!`);
//     }
// };

function createPerson(name, age, location) {
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.location = location;
    obj.greet = function() {
        console.log(`Hallo, ich bin ${this.name}.`);
    }
    return obj;
}

// function Person(name) {
//     this.name = name;
//     this.greet = function() {
//         console.log(`Hallo, ich bin ${this.name}.`);
//     }
// }

class Person {
    #name;

    constructor(firstName, lastName) {
        this.#name = {
            firstName,
            lastName
        };
    }

    greet() {
        console.log(`Hallo, ich bin ${this.#name.firstName}.`);
    }

    tippNachname() {
        console.log(`Der erste Buchstabe meines Nachnamens ist ${this.#name.lastName[0]}.`);
    }

    switcheroo(firstName) {
        this.#name.firstName = firstName;
    }
}

// const people = [
//     "Stephan",
//     "Elena",
//     "Jule",
//     "Tochi",
//     "Zenobia",
//     "Peter",
//     "Otto",
//     "Swantje",
//     "Katharina",
//     "Alexandra",
//     "Sebastian"
// ];

// people.forEach(name => {
//     const person = new Person(name);
//     person.greet();
// });

class Schueler extends Person {
    klassenstufe;
    lieblingsfach;

    constructor(firstName, lastName, klassenstufe, lieblingsfach) {
        super(firstName, lastName);
        this.klassenstufe = klassenstufe;
        this.lieblingsfach = lieblingsfach;
    }

    greet() {
        super.greet();
        console.log(`Mein Lieblingsfach ist ${this.lieblingsfach}`);
    }
}

class Lehrer extends Person {
    fach;

    constructor(firstName, lastName, fach) {
        super(firstName, lastName);
        this.fach = fach;
    }
}

const harry = new Schueler("Harry", "Potter", 3, "Verteidigung gegen die dunklen Künste.");
const minerva = new Lehrer("Minerva", "McGonagall", "Verwandlung");

// harry.greet();
// minerva.greet();
// minerva.tippNachname();

harry.switcheroo("Ron");
harry.greet();