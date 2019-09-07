import axios from 'axios'
let baseUrl = 'http://localhost:8080/AP';
// let baseUrl = "http://tspdemo.changan.com.cn";
let baseUrlTest = "http://tsptest.changan.com.cn";
const { origin } = document.location;
const content = '/AP';
const server = `${origin}${content}`;


export const getAllData = (month,success,error) =>
  axios.get(`${server}/uc/api/monthReport/selectDataReport?statisMonth=${month}`)
    .then(success)
    .catch(error);
  // axios.get(`${server}/monthReport/selectMonthReport?staticDate=${month}`)
  //   .then(success)
  //   .catch(error);


export const getMonth = (success,error) =>
  axios.get(`${server}/uc/api/monthReport/getMonth`)
    .then(success)
    .catch(error)
  // axios.get(`${baseUrl}/monthReport/getMonth`)
  //   .then(success)
  //   .catch(error)

export const advise = (count,advise,success,error) =>
  axios.get(`${server}/uc/api/monthReport/dataReportScore?score=${count}&comment=${advise}`)
    .then(success)
    .catch(error)
// axios.get(`${baseUrl}/monthReport/getMonth`)
//   .then(success)
//   .catch(error)


