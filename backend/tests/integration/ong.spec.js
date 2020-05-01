const request = require('supertest');
const app = require('../../src/app');
const connection = require ('../../src/database/connection');

describe('Ong',()=>{
    beforeEach(async ()=>{
        await connection.migrate.latest();
    })
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"DCaaaa",
            email:"isaac_maciel@hotmail.com",
            whatsapp:"81979150833",
            city:"Recife",
            uf:"PE"
        });

        console.log(response.body);
    });
})