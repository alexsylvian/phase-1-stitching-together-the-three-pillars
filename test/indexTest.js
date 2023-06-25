require ( './helpers.js' );

describe("index.js", () => {
  it("exists", () => {
    expect(testVar).to.exist
    expect(testVar).to.deep.equal({}) //with out .deep, {} does not equal {}
  })
})
