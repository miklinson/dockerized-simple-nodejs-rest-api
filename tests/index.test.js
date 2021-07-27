const app = require("../index");
const supertest = require("supertest");
const { response } = require("express");

test("GET /menu", async ()=>{
    await supertest(app).get("/menu")
        .expect(200)
        .then((response)=>{
            //Check data
            expect(response.body.menu).toBeDefined();
            expect(response.body.menu[0].name).toBeDefined();
            expect(response.body.menu[0].name).toBe('Steak');
        })
});

test("GET /menu/steak", async ()=>{
    await supertest(app).get("/menu/steak")
        .expect(200)
        .then((response)=>{
            expect(response.body.steak).toBeDefined()
            expect(response.body.steak[0]).toBeDefined()
            expect(response.body.steak[0].name).toBeDefined()
            expect(response.body.steak[0].cook_method).toBeDefined()
            expect(response.body.steak[0].doneness).toBeDefined()
        })
})

test("GET /", async ()=>{
    await supertest(app).get("/")
        .expect(200)
        .then((response)=>{
            expect(response.body.message).toBeDefined()
            expect(response.body.message).toBe("dockerized food menu app base path")
        })
})