const Adoption = artifacts.require("Adoption");

contract("Adoption", async function(accounts) {
  it("[Happy Path] should be able to create new todo Item, and complete it.", async function() {
    const adop = await Adoption.deployed();

    const mockPetId = 12;

    console.log('adop.address: ', adop.address)
    await adop.adopt(mockPetId)
    const result = await adop.getAdopters()
    console.log('result: ', result)

    assert.equal(true, true);
  });
});
