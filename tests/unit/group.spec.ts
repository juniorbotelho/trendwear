import groupContext from "../../src/hooks/GroupContext"

describe("Group", () => {
  it("should create an object group and map them correctly", () => {
    groupContext.setItem("name", "deschamps")

    const hasName = groupContext.hasItem("name")

    expect(hasName).toBe(true)
  })

  it("should get the data from the previously created object", () => {
    const name = groupContext.getItem("name")

    expect(name).toBe("deschamps")
  })
})
