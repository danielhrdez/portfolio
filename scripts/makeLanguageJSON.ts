import fs from 'fs';
import getJSONFromCSV from "../src/utils/getJSONFromCSV";

/**
 * @desc This function generates the language.json file.
 * @returns {void} This function returns nothing.
 */
function makeLanguageJSON(input: string, output: string): void {
  const csv = fs.readFileSync(input, 'utf8');
  const data = getJSONFromCSV(csv);
  fs.writeFileSync(output, JSON.stringify(data, null, 2));
}

function main(): void {
  const input = './src/data/language.csv';
  const output = './src/data/language.json';
  makeLanguageJSON(input, output);
  if (process.argv[2] === '--watch') {
    fs.watchFile(input, () => {
      makeLanguageJSON(input, output);
    });
  }
}

main();
