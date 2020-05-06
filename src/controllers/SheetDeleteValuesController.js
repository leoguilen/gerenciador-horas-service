const GoogleSpreadsheet = require('google-spreadsheet');
const path = require('path');
const credentials = require(path.resolve('src', 'config', 'credentials.json'));
const { promisify } = require('util');
require('dotenv/config');

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

module.exports = {
    async deleteCell(req, res) {
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            const cells = await promisify(sheet.getCells)({ "return-empty": true });

            cells.forEach(cell => {
                if (cell.batchId == req.params.id) {
                    try {
                        cell.value = "";
                        cell.save();
                        res.send("Deleted with success");
                    } catch (err) {
                        res.send("Has a problem in delete. Not deleted");
                    }
                }
            });

        } catch (err) {
            res.json("Falha no metodo de inserção de dados no documento (Method: 'sendInfos') . Detalhes: " + err);
        }
    },
}