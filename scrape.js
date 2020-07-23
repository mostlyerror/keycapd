(async function scrapeSubreddit() {
  const snoowrap = require('snoowrap')
  const userAgent = 'A random string.'
  const clientId = 'Sy6uNFiFJPEjqg'
  const clientSecret = 'g1FAXNH0tdkH5E5KYax7facl2pw'
  const refreshToken = '10973716-GcjsJ5hScnwXIGjA_FUeQVQFgoQ'
  const accessToken = '10973716-jeKCbwYtgbWsL2F8LRFWpjxnwMY'
  const r = new snoowrap({
    userAgent,
    clientId,
    clientSecret,
    refreshToken,
  })

  const subreddit = await r.getSubreddit('MechGroupBuys')
  const topPosts = await subreddit.getTop({time: 'week', limit: 3})

  let data = []

  topPosts.forEach(post => {
    data.push({
      url: post.url,
      title: post.title,
      score: post.score
    })
  })

  console.log(data)
})()
