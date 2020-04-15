describe("Cells Count",() => {
    const { validateCellId } = require('../../src/utils')
    it('should not cell id to be greater than spreadsheet cells count', done => {
        const rowsCount = 5
        const columnsCount = 5
        const invalidCellId = 26

        expect(validateCellId(rowsCount,columnsCount,invalidCellId)).toBeFalsy()

        done()
    });

    it('should cell id to be less or equal than spreadsheet cells count', done => {
        const rowsCount = 5
        const columnsCount = 5
        const validCellId = 24

        expect(validateCellId(rowsCount,columnsCount,validCellId)).toBeTruthy()

        done()
    });
})