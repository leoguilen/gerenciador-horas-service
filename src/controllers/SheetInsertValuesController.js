const GoogleSpreadsheet = require('google-spreadsheet');
const path = require('path');
const credentials = require(path.resolve('credentials.json'));
const { promisify } = require('util');
require('dotenv/config');

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

module.exports = {
    async sendInfos(req,res){
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            const cells = await promisify(sheet.getCells)({"return-empty": true});

            let timeNotFormated = req.params.time;
            let timeFormated = timeNotFormated.substr(0,2) + ":" + timeNotFormated.substr(2,2) + ":" + timeNotFormated.substr(4,2);

            cells[34].value = timeFormated;
            sheet.bulkUpdateCells(cells);
            
            res.send("Success");

        } catch (err) {
            res.json("Falha no metodo de inserção de dados no documento (Method: 'sendInfos') . Detalhes: " + err);
        }
    },
}