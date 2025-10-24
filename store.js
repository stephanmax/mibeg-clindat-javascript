import * as fs from "node:fs";

const readData = () => {
    const jsonString = fs.readFileSync("./store-data.json");
    return JSON.parse(jsonString);
};

const writeData = (data) => {
    const jsonString = JSON.stringify(data, null, 4);
    fs.writeFileSync("./store-data.json", jsonString);
};

const main = () => {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        console.log(readData());
        // console.log('Usage: node store.js "string to add"');
        return;
    }

    writeData(args[0]);
};

main();