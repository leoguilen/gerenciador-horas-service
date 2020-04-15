const app = require('../../server')
const supertest = require('supertest')
const request = supertest(app)

describe("Endpoints", () => {

    it('Has App Defined', () => {
        expect(app).toBeDefined()
    })

    describe("Routes", () => {
        
        describe("Spreadsheet Info Routes", () => {
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
    
                done()
            })
        })

        describe("Spreadsheet Cell Infos", () => {
            it("should return spreadsheet cell info", async done => {
                const validCellId = 25
                const res = await request.get('/api/spreadsheet/data/infoCell/' + validCellId)
    
                expect(res.status).toBe(200)
                expect(res.body).toHaveProperty("row")
                expect(res.body).toHaveProperty("column")
                expect(res.body).toHaveProperty("value")
                expect(res.body).toHaveProperty("id")
    
                done()
            }) 

            it("should return spreadsheet cell info", async done => {
                const invalidCellId = 800
                const res = await request.get('/api/spreadsheet/data/infoCell/' + invalidCellId)
    
                expect(res.notFound).toBeTruthy()
                expect(res.text).toBe("Not Found")
                
                done()
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