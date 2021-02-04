import { Trendings } from "@Trending:Api/Trending"

describe("Trendings", () => {
  it("should return Google Trendsings without errors", async () => {
    const Trendwear = (geo: string) => {
      return new Trendings({
        engine: "https://api.rss2json.com/v1/api.json",
        trendingUrl: "https://trends.google.com.br/trends/trendingsearches/daily/rss",
        geo: geo
      })
    }

    // Trendwear
    const trendwear = await Trendwear("BR")
      .getSchemaFromTrendings()

    expect(trendwear.status).toBe("ok")
  })
})
