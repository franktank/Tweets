    ActionTypes = require('../constants/constants.js.jsx');

TweetStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
    console.log(4, "TweetStore");
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      break;
  }
};