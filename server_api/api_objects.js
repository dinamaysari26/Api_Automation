async function getMethod(id)
{
    const response = await request(url)
        .get(`/objects/${id}`)

    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(id);
    // expect(response.)
  
    console.log("done");
}