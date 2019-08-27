const express = require('express');
const routes = express.Router();

const SheetInfoController = require('./controllers/SheetInfoController');
const SheetValuesController = require('./controllers/SheetValuesController');

// Spreadsheet getting infos
routes.get('/spreadsheet/info', SheetInfoController.getDocAllInfo);
routes.get('/spreadsheet/info/dimension', SheetInfoController.getDimension);
routes.get('/spreadsheet/info/modifyInfo', SheetInfoController.getModifyInfo);

// Spreadsheet getting data
routes.get('/spreadsheet/data/cell/:id', SheetValuesController.getCell);
routes.get('/spreadsheet/data/cells', SheetValuesController.getCells);
routes.get('/spreadsheet/data/row', SheetValuesController.getRow);

module.exports = routes;