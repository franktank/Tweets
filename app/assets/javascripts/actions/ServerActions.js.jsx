var AppDispatcher = require('../dispatcher/dispatcher.js'),
    ActionTypes = require('../constants/constants.js.jsx');

 var ServerActions = root.ServerActions = {
    receivedTweets: function(rawTweets) {
      console.log(3, "ServerActions.receivedTweets")
      AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVED_TWEETS,
        rawTweets: rawTweets
      });
    },
    receivedOneTweet: function(rawTweet) {
      AppDispatcher.dispatch({
        actionType: ActionTypes.RECEIVED_ONE_TWEET,
        rawTweet: rawTweet
      });
    }
 };

module.exports = ServerActions;
