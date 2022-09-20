import fs from 'fs';

export interface ICSVRow {
  [key: string]: string;
}

export interface ICSV {
  [key: string]: ICSVRow;
};

export function getJSONFromCSV(csvFilename: string): ICSV {
  const csv = fs.readFileSync(csvFilename, 'utf8');
  const lines = csv.split('\n');
  const result: ICSV = {};
  const headers = lines[0].split(',');
  for (let i = 1; i < lines.length; i++) {
    const obj: ICSVRow = {};
    const currentline = lines[i].split(',');
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result[currentline[0].split(' ')[0]] = obj;
  }
  return result;
}

export default getJSONFromCSV;
