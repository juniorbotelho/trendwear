import Axios from "axios"
import Url, { URL } from "url"
import Group from "../hooks/GroupContext"

declare namespace Params {
  export interface Create {
    engine: string
    trendingUrl: string
    geo: string
  }
}

declare namespace Body {
  export interface Feed {
      url: string;
      title: string;
      link: string;
      author: string;
      description: string;
      image: string;
  }

  export interface Enclosure {
  }

  export interface Item {
      title: string;
      pubDate: string;
      link: string;
      guid: string;
      author: string;
      thumbnail: string;
      description: string;
      content: string;
      enclosure: Enclosure;
      categories: any[];
  }
}

declare interface Schema {
  status: string;
  feed: Body.Feed;
  items: Body.Item[];
}

declare interface Handshake {
  getSchemaFromGroup(): any
  getSchemaFromTrendings(): Promise<any>
}

abstract class AbstractTrendings implements Handshake {
  getSchemaFromGroup (): any {
    throw new Error("Method not implemented.")
  }

  getSchemaFromTrendings (): Promise<Schema> {
    throw new Error("Method not implemented.")
  }
}

export class Trendings implements AbstractTrendings {
  private trendingUrl: string
  private engine: string
  private geo: string

  public static create (options: Params.Create) {
    return new Trendings(options)
  }

  constructor (options: Params.Create) {
    this.trendingUrl = options.trendingUrl
    this.engine = options.engine
    this.geo = options.geo.toUpperCase()
  }

  /**
   * (warning) This is a method under development
   * and may not be working properly
   */
  public getSchemaFromGroup () {
    return Group
  }

  public async getSchemaFromTrendings (): Promise<Schema> {
    const trendingUrl = new URL(this.trendingUrl)
    const engineUrl = new URL(this.engine)

    // Format Urls
    trendingUrl.searchParams.set("geo", this.geo)
    engineUrl.searchParams.set("rss_url", Url.format(trendingUrl))

    try {
      const url = Url.format(engineUrl)

      const { data } = await Axios.get<Schema>(url)

      return Promise.resolve(data)
    } catch (error) {
      // TODO: Error
      return Promise.reject(error)
    }
  }
}
