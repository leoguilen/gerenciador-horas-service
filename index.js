const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./credentials.json');
const { promisify } = require('util');

const docId = '1vtZMvYfQcINO1cS-hy1bsyOHhzrJfBZ_QpVPQ8AdNt8';
// const doc = new GoogleSpreadsheet(docId);
// doc.useServiceAccountAuth(credentials, err => {
//     doc.getInfo((err,info) => {
//         console.log(info);
//     });
// })

const accessSheet = async() => {
    const doc = new GoogleSpreadsheet(docId);
    await promisify(doc.useServiceAccountAuth)(credentials);
}