const express = require('express');
const routes = express.Router();

const SheetInfoController = require('./controllers/SheetInfoController');
const SheetGetValuesController = require('./controllers/SheetGetValuesController');
const SheetInsertValuesController = require('./controllers/SheetInsertValuesController');
const SheetDeleteValuesController = require('./controllers/SheetDeleteValuesController');

// Check Service Disponibitily
routes.get('/checkService', (req,res) => res.json({"serviceStatus":res.statusCode}));

// Spreadsheet getting infos
routes.get('/spreadsheet/info', SheetInfoController.getDocAllInfo);
routes.get('/spreadsheet/info/modifyInfo', SheetInfoController.getModifyInfo);

// Spreadsheet getting data
routes.get('/spreadsheet/data/cells', SheetGetValuesController.getCells);
routes.get('/spreadsheet/data/cell/:date', SheetGetValuesController.getCell);
routes.get('/spreadsheet/data/infoCell/:id', SheetGetValuesController.getInfosCell);
routes.get('/spreadsheet/data/indexCell/:date',SheetGetValuesController.getIndexCell);

// Spreadsheet inserting and updating data
routes.post('/spreadsheet/data/insertObs', SheetInsertValuesController.sendObs);
routes.post('/spreadsheet/data/insertTime', SheetInsertValuesController.sendInfos);

// Spreadsheet deleting data
routes.delete('/spreadsheet/data/deleteCell/:id', SheetDeleteValuesController.deleteCell)

module.exports = routes;