import { Feed } from "../../src/libs/Feed"

describe("libs/feed", () => {
  it("should return the context of the Feed class without any error", async () => {
    const feed = new Feed()

    const Result = feed.setUrlParams("https://www.youtube.com.br/")

    expect(Result).toBeInstanceOf(Feed)
  })
})
