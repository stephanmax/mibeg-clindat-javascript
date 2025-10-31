import * as fs from "node:fs";

const readData = (file) => {
    try {
        const jsonString = fs.readFileSync(file);
        return JSON.parse(jsonString);
    }
    catch(err) {
        if (err.code === "ENOENT") {
            return [];
        }

        throw err;
    }
};

const writeData = (file, data) => {
    const jsonString = JSON.stringify(data, null, 4);
    fs.writeFileSync(file, jsonString);
};

const checkMinArgs = (args, min, cmd) => {
    if (args.length < min) {
        throw new Error(`Command ${cmd} needs minimum ${min} arguments.`);
    }
};

const main = () => {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log("node store.js [write|read] <file> (content)");
        return;
    }

    const cmd = args[0];
    
    if (cmd === "write") {
        checkMinArgs(args, 2, cmd);
        const file = args[1];

        if (!file.endsWith(".json")) {
            throw new Error(`File ${file} is not of type JSON.`);
        }

        const data = readData(file);
        data.push(args[2]);

        writeData(file, data);
    }
    else if (cmd === "read") {
        checkMinArgs(args, 1, cmd);
        const file = args[1];

        console.log(readData(file));
    }
    else if (cmd === "select") {
        checkMinArgs(args, 2, cmd);
        const file = args[1];
        const row = args[2];

        console.log(readData(file)[row]);
    }
    else if (cmd === "search") {
        checkMinArgs(args, 2, cmd);
        const file = args[1];
        const searchString = args[2];

        console.log(readData(file).filter(r => r.includes(searchString)));
    }
    else {
        throw new Error(`Unknown command ${cmd}.`);
    }
};

main();

// TODO: Aufrufe `node store.js read <file>` lesen die Datei `file` und geben den Inhalt zurück.
// Bonus: `node store.js write <file> <content>` überschreibt die Datei `file` nicht, sondern hängt `content` ans Ende an.