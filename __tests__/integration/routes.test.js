const request = require('supertest');
const app = require('../../server.js');

describe("Endpoints", () => {
    it("should return spreadsheet info", async () => {
        const res = await request(app)
            .get("/spreadsheet/info");
    }); 

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("Title");
    expect(res.body).toHaveProperty("RowsCount");
    expect(res.body).toHaveProperty("ColumnsCount");
});