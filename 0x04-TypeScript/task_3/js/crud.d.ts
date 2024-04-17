import {RowID, RowElement} from './interface'

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(id: RowID): void;
declare function updateRow(id: RowID, updatedRow: RowElement): RowElement;