import { Trendings } from "./libs/Trending"
import { HttpApi } from "./api/HttpApi"
import { Google } from "./api/GoogleApi"

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
  const httpApi = new HttpApi()
  const googleApi = new Google()

  return new Trendings({
    engine: httpApi.adress,
    trendingUrl: googleApi.address,
    geo: geo
  })
}

export default Trendwear
