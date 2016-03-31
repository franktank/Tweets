    TweetActions = require("../actions/TweetActions.js.jsx");

TweetActions.getAllTweets();
var Main = React.createClass({displayName: "Main",
  getInitialState: function() {
    return{ tweetsList: [] };
  },
  /*
  formattedTweets: function(tweetsList) {
    let formattedList = tweetsList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
    return{
      tweetsList: formattedList
    };
  },
  */
  addTweet: function(tweetToAdd) {
    /*$.post("/tweets", { description: tweetToAdd })
    .success( savedTweet => {
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);
      this.setState(this.formattedTweets(newTweetsList));
    })
    .error(error => console.log(error));
    */
  },

  componentDidMount: function() {
    /*
      $.ajax("/tweets")
      .success(data => this.setState(this.formattedTweets(data)))
      .error(error => console.log(error));
      */
  },

  render: function() {
    return(
      React.createElement("div", {className: "container"}, 
        React.createElement(TweetBox, {sendTweet: this.addTweet.bind(this)}), 
        React.createElement(TweetsList, {tweets: this.state.tweetsList})
      )
    );
  }
});

$(function(){
  React.render(
    React.createElement(Main, null),
    reactNode
  );
});