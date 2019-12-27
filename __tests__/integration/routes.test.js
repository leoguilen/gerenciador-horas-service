const app = require('../../server')
const supertest = require('supertest')
const request = supertest(app)

describe("Endpoints", () => {

    it('Has App Defined', () => {
        expect(app).toBeDefined()
    })

    describe("Routes", () => {
        
        describe("GET Routes", () => {
            it("should return spreadsheet info", async done => {
                const res = await request.get('/api/spreadsheet/info')
    
                expect(res.status).toBe(200)
                expect(res.body).toHaveProperty("Title")
                expect(res.body).toHaveProperty("RowsCount")
                expect(res.body).toHaveProperty("ColumnsCount")
                
                done()
            })
    
            it("should return spreadsheet update info", async done => {
                const res = await request.get('/api/spreadsheet/info/modifyInfo')
    
                expect(res.status).toBe(200)
                expect(res.body).toHaveProperty("LastUpdate")
                expect(res.body).toHaveProperty("AuthorName")
                expect(res.body).toHaveProperty("AuthorEmail")
    
                done();
            })
        })

        describe('POST Routes', () => {
            // Rotas que utilizam o metodo POST
        })

        describe('DELETE Routes', () => {
            // Rotas que utilizam o metodo DELETE
        })
    })
})