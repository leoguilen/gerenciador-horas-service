// Index de eventos
// entrada: 3, saida_almoco: 4, entrada_almoco: 5, saida: 6

describe('Events', () => {
    const { getBatchID } = require('../../src/utils.js');
    const initialBatchID = "RXC2"; // X == Número da linha

    it('Return cell BatchID valid for event type = Entrance', () => {
        const event = "entrada";
        const expectedBatchID = "RXC3";

        var resultedBatchID = getBatchID(initialBatchID,event);

        expect(expectedBatchID)
        .toBe(resultedBatchID);
    });

    it('Return cell BatchID valid for event type = Lunch out', () => {
        const event = "saida_almoco";
        const expectedBatchID = "RXC4";
                
        var resultedBatchID = getBatchID(initialBatchID,event);

        expect(expectedBatchID)
        .toBe(resultedBatchID);
    });

    it('Return cell BatchID valid for event type = Lunch entrance', () => {
        const event = "entrada_almoco";
        const expectedBatchID = "RXC5";
        
        var resultedBatchID = getBatchID(initialBatchID,event);
        
        expect(expectedBatchID)
        .toBe(resultedBatchID);
    });

    it('Return cell BatchID valid for event type = Exit', () => {
        const event = "saida";
        const expectedBatchID = "RXC6";
        
        var resultedBatchID = getBatchID(initialBatchID,event);
        
        expect(expectedBatchID)
        .toBe(resultedBatchID);
    });
});