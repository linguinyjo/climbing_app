import axios from 'axios'

export default async function GetLatestTweet(twitterId, tweetId, callback){
  const url = `https://us-central1-climbing-app-236509.cloudfunctions.net/GetLatestTweet?text=${twitterId}`
  axios.get(url)
  .then(data => {
    tweetId = data.data.tweets[0].status['id_str']
    callback(tweetId)
  })    
}

 