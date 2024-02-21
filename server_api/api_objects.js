const request = require("supertest"); // import test
const {expect} = require("chai");
const url = "https://api.restful-api.dev";


module.exports = 
{
    getMethod,
    postMethod,
    putMethod,
    patchMethod,
    deleteMethod
}

async function getMethod(id)
{ 
    const response = await request(url).get(`/objects/${id}`)
    expect(response.body.name).to.equal("Laptop Macbook (PATCH)")

}

async function postMethod()
{
    const response = await request(url)
        .post("/objects")
        .send({
            name: "Laptop Lenovo x240 Sari",
            data: {
                year: 2015,
                price: 1000,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
            },
        });

    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Laptop Lenovo x240 Sari");
    expect(response.body.data.year).to.equal(2015);
    expect(response.body.data.price).to.equal(1000);
    expect(response.body.data).to.deep.include({
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
    });
    expect(response.body.createdAt).to.not.be.null;

    const id = response.body.id;
    console.log("id setelah POST: ",id);
    console.log(response.body);
    return id;
}

async function putMethod(id)
{
    const response = await request(url)
        .put(`/objects/${id}`)
        .send({
            name: "Laptop Asus Sari",
            data: {
                year: 2014,
                price: 500,
                "CPU model": "Intel Core i5",
                "Hard disk size": "1 TB",
            }
        })

        expect(response.status).to.equal(200);
        expect(response.body.data.year).to.equal(2014)
        expect(response.body.data.price).to.equal(500),
        expect(response.body.name).to.equal("Laptop Asus Sari");

        console.log(response.body);
}

async function patchMethod(id)
{
    const response = await request(url)
        .patch(`/objects/${id}`)
        .send(
        {
            name: "Laptop Macbook (PATCH)"
        })

    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Laptop Macbook (PATCH)")
}

async function deleteMethod(id)
{
    const response = await request(url)
        .delete(`/objects/${id}`)
        expect(response.body.message).to.equal
        (
            `Object with id = ${id} has been deleted.`
        )
        // expect(response.body.error).to.equal(`Object with id = ${id} was not found`);
}
