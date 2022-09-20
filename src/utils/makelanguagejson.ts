import fs from 'fs';
import getJSONFromCSV from "./getjsonfromcsv";

function makeLanguageJSON(): void {
  const csv = fs.readFileSync('./src/data/language.csv', 'utf8');
  const data = getJSONFromCSV(csv);
  fs.writeFileSync('./src/data/language.json', JSON.stringify(data, null, 2));
}

makeLanguageJSON();
