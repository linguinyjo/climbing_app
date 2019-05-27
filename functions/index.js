const functions = require('firebase-functions');
const admin = require('firebase-admin')
const twitterConfig = require('./twitterConfig.js')
var cors = require('cors')({origin: true})    
var Twitter = require('twitter');

admin.initializeApp(functions.config().firebase)
var client = new Twitter(twitterConfig);

exports.GetLatestTweet = functions.https.onRequest((request, response) => {
  const name = request.query.text;
  const params = {user_id: name};
  return cors(request, response, () => {
    client.get('users/lookup.json', params, (error, tweets) => {
      if (!error) {
         response.send({ tweets: tweets })
      }
      else {
        console.log(error)
      }
    });
  })
})


