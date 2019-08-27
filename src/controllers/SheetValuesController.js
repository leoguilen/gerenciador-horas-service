const GoogleSpreadsheet = require('google-spreadsheet');
const path = require('path');
const credentials = require(path.resolve('credentials.json'));
const { promisify } = require('util');
require('dotenv/config');

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

module.exports = {
    async getCell(req,res){
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            await promisify(sheet.getCells)({
                "min-row": 1,
                "max-row": sheet.rowCount,
                "return-empty": true
            }, (err,cells) => {
                var cell = cells[req.params.id];
                res.json({ "row": cell.row,"column": cell.col,"value": cell.value });
            });
        } catch (err) {
            res.json("Falha ao tentar acessar o documento. Detalhes: " + err);
        }
    },
    async getCells(req,res){
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            const cells = await promisify(sheet.getCells)();
            
            var result = [];
            for (let index = 0; index < cells.length; index++) {
                result.push(cells[index].value);
            }
            
            res.json(result)

        } catch (err) {
            res.json("Falha ao tentar acessar o documento. Detalhes: " + err);
        }
    },
    async getRow(req,res){
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            const rows = await promisify(sheet.getRows);

            res.json({rows: rows.length});
            
        } catch (err) {
            res.json("Falha ao tentar acessar o documento. Detalhes: " + err);
        }
    },
}