import fs from 'fs';
import getJSONFromCSV from "../src/utils/getJSONFromCSV";

/**
 * @desc This function generates the language.json file.
 * @returns {void} This function returns nothing.
 */
function makeLanguageJSON(): void {
  const csv = fs.readFileSync('./src/data/language.csv', 'utf8');
  const data = getJSONFromCSV(csv);
  fs.writeFileSync('./src/data/language.json', JSON.stringify(data, null, 2));
}

makeLanguageJSON();
