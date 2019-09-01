const express = require('express');
const routes = express.Router();

const SheetInfoController = require('./controllers/SheetInfoController');
const SheetGetValuesController = require('./controllers/SheetGetValuesController');
const SheetInsertValuesController = require('./controllers/SheetInsertValuesController');
const SheetDeleteValuesController = require('./controllers/SheetDeleteValuesController');

// Spreadsheet getting infos
routes.get('/spreadsheet/info', SheetInfoController.getDocAllInfo);
routes.get('/spreadsheet/info/dimension', SheetInfoController.getDimension);
routes.get('/spreadsheet/info/modifyInfo', SheetInfoController.getModifyInfo);

// Spreadsheet getting data
routes.get('/spreadsheet/data/cells', SheetGetValuesController.getCells);
routes.get('/spreadsheet/data/cell/:id', SheetGetValuesController.getCell);
routes.get('/spreadsheet/data/indexCell/:date',SheetGetValuesController.getIndexCell);

// Spreadsheet inserting and updating data
routes.post('/spreadsheet/data/insertObs', SheetInsertValuesController.sendObs);
routes.post('/spreadsheet/data/insertTime', SheetInsertValuesController.sendInfos);

// Spreadsheet deleting data
routes.delete('/spreadsheet/data/deleteCell/:id', SheetDeleteValuesController.deleteCell)

module.exports = routes;