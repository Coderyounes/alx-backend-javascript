export function insertRow(row) {
    console.log('Insert row', row);
    return Math.floor(Math.random() * Math.floor(1000));
}
export function deleteRow(rowId) {
    console.log('Delete row id', rowId);
}
export function updateRow(rowId, row) {
    console.log("Update row ".concat(rowId), row);
    return rowId;
}
//# sourceMappingURL=crud.js.map