const request = require("supertest"); // importsupertest
const {expect} = require("chai");

const url = "https://api.restful-api.dev";

const {
    getMethod,
    postMethod,
    putMethod,
    patchMethod,
    deleteMethod,
} = require("../server_api/api_objects");


describe("KELOLA DATA",function()
{
    let id;
    // test case 1
    it("Post Method Test",async function()
    {
        id = await postMethod();
    })

    // test case 2
    it("Verify response with PUT method", async function()
    {
        await putMethod(id);
    })

    // test case 3
    it("PATCH Method",async function()
    {
        await patchMethod(id);
    })

    // test case 4
    it("GET ID",async function()
    {
        await getMethod(id);
    })

    it("DELETE METHOD",async function()
    {
        await deleteMethod(id);
    })





    
    // other test case
});