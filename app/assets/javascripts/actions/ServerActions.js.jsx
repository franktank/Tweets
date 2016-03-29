receivedTweets: function(rawTweets) {

}
(function (root){
  var ServerActions = root.ServerActions = {
    receivedTweets: function(rawTweets) {
      Dispatcher.dispatch({
        actionType: 'RECEIVED_TWEETS'
        rawTweets: rawTweets
      })
    }
 };
})(this);
