import { ReportHandler } from 'web-vitals';

/**
 * @description This function sends the web vitals to the console.
 * @param {ReportHandler} onPerfEntry This is the function that sends the web vitals to the console.
 * @returns {Promise<void>} This function returns nothing.
 */
const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry !== undefined && onPerfEntry instanceof Function) {
    await import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }
    );
  }
};

export default reportWebVitals;
