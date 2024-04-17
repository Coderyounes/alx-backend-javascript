/// <reference path="crud.d.ts" />
import {RowID, RowElement} from './interface'
const crud = require('./crud')

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
}

const newRowID: RowID = crud.insertRow(row)
const updateRow: RowElement = {...row, age: 27};
crud.updateRow(newRowID, updateRow);
crud.deleteRow(newRowID);