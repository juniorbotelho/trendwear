import { URL } from "url"

declare interface Handshake {
  setUrlParams(url: string): Feed
  setObjectModel(): void
}

abstract class AbstractFeed implements Handshake {
  setObjectModel (): void {
    throw new Error("Method not implemented.")
  }

  setUrlParams (_url: string): Feed {
    throw new Error("Method not implemented.")
  }
}

export class Feed implements AbstractFeed {
  private ctxUrl: URL = null

  private defineTransformUrl (url: string): boolean {
    return url && /((http(s)?):\/\/[\w./\-=?#]+)/i.test(url)
  }

  setObjectModel (): void {
    throw new Error("Method not implemented.")
  }

  setUrlParams (url: string): Feed {
    const isUrlDefined = this.defineTransformUrl(url)

    // this should verify that the URL is valid
    if (isUrlDefined) {
      this.ctxUrl = new URL(url)
      console.log(this.ctxUrl)

      // ContextUrl
      return this
    } else {
      // TODO: Sentry Error
      throw new Error("The URL you entered is not a valid address, please try again.")
    }
  }
}
