import { Trendings } from "./api/Trending"

export const Trendwear = (geo: string) => {
  return new Trendings({
    engine: "https://api.rss2json.com/v1/api.json",
    trendingUrl: "https://trends.google.com.br/trends/trendingsearches/daily/rss",
    geo: geo
  })
}

export default Trendwear
