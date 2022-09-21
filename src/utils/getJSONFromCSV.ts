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
