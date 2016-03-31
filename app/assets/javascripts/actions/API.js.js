    ServerActions = require('../actions/ServerActions.js.jsx');
APIActions = {
  getAllTweets: function() {
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(description) {
    $.post("/tweets", {description})
    .success( rawTweet => ServerActions.receivedOneTweet(rawTweet))
    .error(error => console.log(error));
  }
};

module.exports = APIActions;