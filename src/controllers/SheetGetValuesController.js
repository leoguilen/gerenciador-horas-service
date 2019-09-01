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
            res.json("Falha ao tentar inserir dados no documento (Method: 'getCell') . Detalhes: " + err);
        }
    },
    async getCells(req,res){
        try {
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            const cells = await promisify(sheet.getCells)({"return-empty": true});
            
            var result = [];
            for (let index = 0; index < cells.length; index++) {
                result.push(cells[index].value);
            }
            
            res.json({
                "title": result[0],
                "mes": result[25],
                "data_01" : { "entrada": result[34], "saida_almoco": result[35], "entrada_almoco": result[36], "saida": result[37], "obs": result[38], "extra": result[39]  },
                "data_02" : { "entrada": result[42], "saida_almoco": result[43], "entrada_almoco": result[44], "saida": result[45], "obs": result[46], "extra": result[47]  },
                "data_03" : { "entrada": result[50], "saida_almoco": result[51], "entrada_almoco": result[52], "saida": result[53], "obs": result[54], "extra": result[55]  },
                "data_04" : { "entrada": result[58], "saida_almoco": result[59], "entrada_almoco": result[60], "saida": result[61], "obs": result[62], "extra": result[63]  },
                "data_05" : { "entrada": result[66], "saida_almoco": result[67], "entrada_almoco": result[68], "saida": result[69], "obs": result[70], "extra": result[71]  },
                "data_06" : { "entrada": result[74], "saida_almoco": result[75], "entrada_almoco": result[76], "saida": result[77], "obs": result[78], "extra": result[79]  },
                "data_07" : { "entrada": result[82], "saida_almoco": result[83], "entrada_almoco": result[84], "saida": result[85], "obs": result[86], "extra": result[87]  },
                "data_08" : { "entrada": result[90], "saida_almoco": result[91], "entrada_almoco": result[92], "saida": result[93], "obs": result[94], "extra": result[95]  },
                "data_09" : { "entrada": result[98], "saida_almoco": result[99], "entrada_almoco": result[100], "saida": result[101], "obs": result[102], "extra": result[103]  },
                "data_10" : { "entrada": result[106], "saida_almoco": result[107], "entrada_almoco": result[108], "saida": result[109], "obs": result[110], "extra": result[111]  },
                "data_11" : { "entrada": result[114], "saida_almoco": result[115], "entrada_almoco": result[116], "saida": result[117], "obs": result[118], "extra": result[119]  },
                "data_12" : { "entrada": result[122], "saida_almoco": result[123], "entrada_almoco": result[124], "saida": result[125], "obs": result[126], "extra": result[127]  },
                "data_13" : { "entrada": result[130], "saida_almoco": result[131], "entrada_almoco": result[132], "saida": result[133], "obs": result[134], "extra": result[135]  },
                "data_14" : { "entrada": result[138], "saida_almoco": result[139], "entrada_almoco": result[140], "saida": result[141], "obs": result[142], "extra": result[143]  },
                "data_15" : { "entrada": result[146], "saida_almoco": result[147], "entrada_almoco": result[148], "saida": result[149], "obs": result[150], "extra": result[151]  },
                "data_16" : { "entrada": result[154], "saida_almoco": result[155], "entrada_almoco": result[156], "saida": result[157], "obs": result[158], "extra": result[159]  },
                "data_17" : { "entrada": result[162], "saida_almoco": result[163], "entrada_almoco": result[164], "saida": result[165], "obs": result[166], "extra": result[167]  },
                "data_18" : { "entrada": result[170], "saida_almoco": result[171], "entrada_almoco": result[172], "saida": result[173], "obs": result[174], "extra": result[175]  },
                "data_19" : { "entrada": result[178], "saida_almoco": result[179], "entrada_almoco": result[180], "saida": result[181], "obs": result[182], "extra": result[183]  },
                "data_20" : { "entrada": result[186], "saida_almoco": result[187], "entrada_almoco": result[188], "saida": result[189], "obs": result[190], "extra": result[191]  },
                "data_21" : { "entrada": result[194], "saida_almoco": result[195], "entrada_almoco": result[196], "saida": result[197], "obs": result[198], "extra": result[199]  },
                "data_22" : { "entrada": result[202], "saida_almoco": result[203], "entrada_almoco": result[204], "saida": result[205], "obs": result[206], "extra": result[207]  },
                "data_23" : { "entrada": result[210], "saida_almoco": result[211], "entrada_almoco": result[212], "saida": result[213], "obs": result[214], "extra": result[215]  },
                "data_24" : { "entrada": result[218], "saida_almoco": result[219], "entrada_almoco": result[220], "saida": result[221], "obs": result[222], "extra": result[223]  },
                "data_25" : { "entrada": result[226], "saida_almoco": result[227], "entrada_almoco": result[228], "saida": result[229], "obs": result[230], "extra": result[231]  },
                "data_26" : { "entrada": result[234], "saida_almoco": result[235], "entrada_almoco": result[236], "saida": result[237], "obs": result[238], "extra": result[239]  },
                "data_27" : { "entrada": result[242], "saida_almoco": result[243], "entrada_almoco": result[244], "saida": result[245], "obs": result[246], "extra": result[247]  },
                "data_28" : { "entrada": result[250], "saida_almoco": result[251], "entrada_almoco": result[252], "saida": result[253], "obs": result[254], "extra": result[255]  },
                "data_29" : { "entrada": result[258], "saida_almoco": result[259], "entrada_almoco": result[260], "saida": result[261], "obs": result[262], "extra": result[263]  },
                "data_30" : { "entrada": result[266], "saida_almoco": result[267], "entrada_almoco": result[268], "saida": result[269], "obs": result[270], "extra": result[271]  },
                "data_31" : { "entrada": result[274], "saida_almoco": result[275], "entrada_almoco": result[276], "saida": result[277], "obs": result[278], "extra": result[279]  },
                "total_horas_extras": result[287]
            });

        } catch (err) {
            res.json("Falha ao tentar inserir dados no documento (Method: 'getCells') . Detalhes: " + err);
        }
    },
    async getIndexCell(req,res){
        try{
            await promisify(doc.useServiceAccountAuth)(credentials);
            const info = await promisify(doc.getInfo)();
            const sheet = info.worksheets[0];
            
            let dateNotFormated = req.params.date;
            let dateFormated = dateNotFormated.substr(0,2) + '/' + dateNotFormated.substr(2,2);

            await promisify(sheet.getCells)({
                "min-row": 1,
                "max-row": sheet.rowCount,
                "return-empty": true
            }, (err,cells) => {
                let row, col, batchId;
                cells.forEach(cell => {
                    if(cell.value == dateFormated){
                        row = cell.row;
                        col = cell.col; 
                        batchId = cell.batchId;    
                    }
                });
                res.json({ "row": row, "col": col, "Id": batchId});
            });

        } catch (err) {
            res.json("Falha ao tentar inserir dados no documento (Method: 'getIndexCell') . Detalhes: " + err);
        }
    },
}