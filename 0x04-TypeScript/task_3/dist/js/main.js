var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var crud = require('./crud');
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = crud.insertRow(row);
var updateRow = __assign(__assign({}, row), { age: 27 });
crud.updateRow(newRowID, updateRow);
crud.deleteRow(newRowID);
export {};
//# sourceMappingURL=main.js.map