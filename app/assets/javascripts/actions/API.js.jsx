(function (root){
  var API = root.API = {
    getAllTweets: function() {
      $.get("/tweets")
      .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
      .error(error => console.log(error));
    }
 };
})(this);
