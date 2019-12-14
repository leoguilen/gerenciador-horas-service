const GoogleSpreadsheet = require('google-spreadsheet');
const path = require('path');
const credentials = require(path.resolve('credentials.json'));
const { promisify } = require('util');
require('dotenv/config');

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

module.exports = {
    async sendInfos(req,res){
        try {
            const index_eventos = { entrada: 3, saida_almoco: 4, entrada_almoco: 5, saida: 6 };

            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            const cells = await promisify(sheet.getCells)({"return-empty": true});

            const { date,why,time,who } = req.body;
            var id_cell = "";

            cells.forEach(cell => {
                if(cell.value == date)
                    id_cell = cell.batchId;
            });            

            switch (why) {
                case "entrada": {
                    id_cell = id_cell.replace("C2", "C" + index_eventos.entrada);
                } 
                    break;
                case "saida_almoco": {
                    id_cell = id_cell.replace("C2", "C" + index_eventos.saida_almoco);
                } 
                    break;
                case "entrada_almoco": {
                    id_cell = id_cell.replace("C2", "C" + index_eventos.entrada_almoco);
                } 
                    break;
                case "saida": {
                    id_cell = id_cell.replace("C2", "C" + index_eventos.saida);
                } 
                    break;
            }

            cells.forEach(cell => {
                if(cell.batchId == id_cell) {
                    try{
                        cell.value = time;
                        cell.save();
                        res.send("New value inserted with success");
                    } catch (err) {
                        res.send("Has a problem in insert. Not inserted");
                    }
                } 
            });

        } catch (err) {
            res.json("Falha no metodo de inserção de dados no documento (Method: 'sendInfos') . Detalhes: " + err);
        }
    },
    async sendObs(req,res) {
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            const cells = await promisify(sheet.getCells)({"return-empty": true});

            const {date,obs} = req.body;
            var id_cell = "";

            cells.forEach(cell => {
                if(cell.value == date)
                    id_cell = cell.batchId;
            });     

            id_cell = id_cell.replace("C2", "C7");

            cells.forEach(cell => {
                if(cell.batchId == id_cell) {
                    try{
                        cell.value = obs;
                        cell.save();
                        res.send("New value inserted with success");
                    } catch (err){
                        res.send("Has a problem in insert. Not inserted");
                    }
                } 
            });

        } catch (err) {
            res.json("Falha no metodo de inserção de observação no documento (Method: 'sendObs') . Detalhes: " + err);
        }
    },
}