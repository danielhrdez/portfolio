import fs from 'fs';
import getJSONFromCSV from "./getjsonfromcsv";

function makeLanguageJSON(): void {
  const data = getJSONFromCSV(`./src/data/language.csv`);
  fs.writeFileSync('./src/data/language.json', JSON.stringify(data, null, 2));
}

makeLanguageJSON();
