import { Trendings } from "./api/Trending"

/**
 * This is the main function of Trendwear, it is from here that you can
 * initiate the call to Google Trendings, from a 'GEO' locale,
 * here are some examples:
 *
 * Ex: US, GB, BR, JP
 *
 * @param geo - lacale where Google Trendings will return an object
 */
const Trendwear = (geo: string) => {
  return new Trendings({
    engine: "https://api.rss2json.com/v1/api.json",
    trendingUrl: "https://trends.google.com.br/trends/trendingsearches/daily/rss",
    geo: geo
  })
}

export default Trendwear
