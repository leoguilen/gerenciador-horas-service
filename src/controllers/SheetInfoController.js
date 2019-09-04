const GoogleSpreadsheet = require('google-spreadsheet');
const path = require('path');
const credentials = require(path.resolve('credentials.json'));
const { promisify } = require('util');
require('dotenv/config');

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

module.exports = {
    async getDocAllInfo(req,res){
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            await promisify(doc.getInfo)((err,info) => {
                sheet = info.worksheets[0];
                res.json({ "Id": info.id, "Title": info.title,
                        "RowsCount":sheet.rowCount, 
                        "ColumnsCount":sheet.colCount });
            });
        } catch (err) {
            res.json("Falha ao tentar inserir dados no documento (Method: 'getDocAllInfo') . Detalhes: " + err);
        }
    },
    async getModifyInfo(req,res){
        try{
            await promisify(doc.useServiceAccountAuth)(credentials);
            await promisify(doc.getInfo)((err,info) => {
                res.json({ "LastUpdate": info.updated, "AuthorName": info.author.name, "AuthorEmail": info.author.email });
            });
        } catch (err) {
            res.json("Falha ao tentar inserir dados no documento (Method: 'getModifyInfo') . Detalhes: " + err);
        }
    },
}