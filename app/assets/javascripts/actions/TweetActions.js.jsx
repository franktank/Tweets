var API = require('../API.js.jsx');
TweetActions = {
    getAllTweets: function() {
      console.log(1, "TweetActions");
      API.getAllTweets();
    },
    sendTweet(description) {
      API.createTweet(description);
    }
};
module.exports = TweetActions;
