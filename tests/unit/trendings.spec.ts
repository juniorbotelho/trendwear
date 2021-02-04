import Trendwear from "../../src/index"

describe("Trendings", () => {
  it("should return Google Trendings without errors", async () => {
    const trendwear = Trendwear("BR")

    const schema = await trendwear.getSchemaFromTrendings()

    expect(schema.items).toBeInstanceOf(Array)
    expect(schema.items.length).toBeGreaterThanOrEqual(1)
  })
})
