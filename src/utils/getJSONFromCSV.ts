/**
 * @desc Interface for the CSV Rows.
 * @interface ICSVRow
 */
interface ICSVRow {
  [key: string]: string;
}

/**
 * @desc Interface for the CSV.
 * @interface ICSV
 */
interface ICSV {
  [key: string]: ICSVRow;
};

/**
 * @desc This function returns the JSON from the CSV.
 * @param {string} csv This is the CSV string.
 * @returns {ICSV} This function returns the JSON from the CSV.
 */
function getJSONFromCSV(csv: string): ICSV {
  const lines = csv.split('\n');
  const result: ICSV = {};
  const headers = lines[0].split(',').slice(1);
  for (let i = 1; i < lines.length; i++) {
    const obj: ICSVRow = {};
    const [key, ...currentline] = CSVtoArray(lines[i]);
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result[key] = obj;
  }
  return result;
}

function CSVtoArray(text: string): string[] {
  const regexValid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
  const regexValue = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
  if (!regexValid.test(text)) throw new Error('Invalid CSV');
  const a = [];
  text.replace(regexValue, (_, m1, m2, m3) => {
    if (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
    else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
    else if (m3 !== undefined) a.push(m3);
    return '';
  });
  if (/,\s*$/.test(text)) a.push('');
  return a;
};

export default getJSONFromCSV;
