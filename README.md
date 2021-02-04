# trendwear
:green_book: library to deal with Google Trends and its most discussed topics

## Example
```typescript
import Trendwear from "trendwear"

const trends = Trendwear("US") // Too: US, GB, BR, JP...

trends.getSchemaFromTrendings()
  .then((res) => console.log(res.items))
  .catch((error) => new Error(error))
```
## With async function
```typescript
const { status, feed, items } = await trends.getSchemaFromTrendings()

// Get info
console.log('status', status)
console.log('feed', feed.title)
console.log('items', items.length)
```

## Result
```typescript
{
  status:"ok",
  feed: {
    url: "https://trends.google.com/trends/trendingsearches/daily/rss?geo=US",
    title: "Daily Search Trends",
    link: "https://trends.google.com/trends/trendingsearches/daily?geo=US",
    author: "",
    description: "Recent searches",
    image: ""
  },
  items: [
    {
      title: "Salma Hayek",
      pubDate: "2021-02-04 15:00:00",
      link: "https://trends.google.com/trends/trendingsearches/daily?geo=US#Salma%20Hayek",
      guid: "672633e4373a64063455d11fced0c6a0",
      author: "",
      thumbnail: "",
      description: "",
      content: "",
      enclosure: {},
      categories:[]
    }
    // ...
  ]
}
```
