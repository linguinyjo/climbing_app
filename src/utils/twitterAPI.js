//var Twitter = require('twitter-node-client').Twitter;
//var twitter = new Twitter(twitterConfig);
var request = require('request');

// make the request
export default function GetLatestTweet(){
  console.log('hello from the twitter api')
  // request('https://api.twitter.com/1.1/users/show.json?user_id=34392367', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(response)
      
  //   }
  //   if(error){
  //     console.log(error)
  //   }
  // })
}

// var error = function (err, response, body) {
//   console.log('ERROR [%s]', err);
// };

// export default function GetLatestTweet(twitterId, tweetId, callback){
//   twitter.getUser({user_id: twitterId}, error, (data) => {
//       tweetId = JSON.parse(data).status['id_str']
//       callback(tweetId) 
//     })
      
// }
    
// export default function GetLatestTweet(){   
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = 'https://api.twitter.com/1.1/users/show.json?user_id=34392367'; 
// fetch(proxyurl + url) 
// .then(response => response.text())
// .then(contents => console.log(contents))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
// }

// var Twit = require('twit')

// var config = {
//   consumerKey: 'fEctMMrb8CJFUo0t1DglgbUe8',
//   consumerSecret: 'ISjlUwA8RKr2hix8wrxg6P6U60y2IM0yLj4qMH6BAQVP4W0ad3',
//   accessToken: '1128975842531581952-CHJD3Jy391KhgGKBDNN34oAoJDiXWc',
//   accessTokenSecret: 'vHqMAZfuXGrZvmmZe4SCKL22mnqdE5qdMy8f01C4XWuVv'
// }

// var T = new Twit(config);
// var params = {
//     id: '1'
//     // count: 3
// }
// T.get('trends/place', params, gotData);

//     function gotData(err, data, response) {
//         var tweets = data;
//         console.log(tweets);
    // }
    

    //const functions = require('firebase-functions');
    //const admin = require('firebase-admin');
    // const Twitter = require('twitter');
    // const express = require('express')
    // //admin.initializeApp();
    
    // const client = new Twitter({
    //   consumer_key: 'fEctMMrb8CJFUo0t1DglgbUe8',
    //   consumer_secret: 'ISjlUwA8RKr2hix8wrxg6P6U60y2IM0yLj4qMH6BAQVP4W0ad3',
    //   access_token_key: '1128975842531581952-CHJD3Jy391KhgGKBDNN34oAoJDiXWc',
    //   access_token_secret: 'vHqMAZfuXGrZvmmZe4SCKL22mnqdE5qdMy8f01C4XWuVv'
    // });
    
    // const app = express();
    
    // app.get('/', function(req,res){
    //   client.get('statuses/user_timeline', {screen_name: 'nodejs', count: 5}, function (error, tweets, response) {
    
    //       if (!error) {
    //           response.send({ title: 'Express', tweets: tweets })
    //       }
    //       else {
    //           response.send({ error: "this is error: " + error })
    //       }
    //   });
    // });

 