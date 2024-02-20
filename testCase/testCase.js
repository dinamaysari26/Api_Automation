const request = require("supertest"); // importsupertest
const {expect} = require("chai");
const url = "https://api.restful-api.dev";
const {
    getMethod
} = require("../server_api/api_objects");

describe("GET REQUEST TEST RESFTUL",function()
{
    // test case 1
  /*  it("GET",async function()
    {
        // const response = await request("https://api.restful-api.dev")
        // .get("/objects/4");

        const response = await request(url).get('/objects/4').expect(200);
        
        // Assertions

        expect(response.status).to.equal(200);
        expect(response.body.id).to.equal("4");
        console.log(response.body);
        // expect(response.body.id).to.equal("4");
        // other assertions
    });   */

    it("GET ID",async function()
    {
        await getMethod("4");
    })

    /*
    it("GET KESELURUHAN",async function()
    {
        // const response = await request("https://api.restful-api.dev")
        // .get("/objects/4");

        const response = await request(url).get('/objects').expect(200);
        
        // Assertions

        expect(response.status).to.equal(200);
        // expect(response.body.id).to.equal("4");
        console.log(response.body);
        // expect(response.body.id).to.equal("4");
        // other assertions
    }); */

    
    // other test case
});