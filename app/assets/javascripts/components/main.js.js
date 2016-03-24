  getInitialState: function() {
    return{ tweetsList: [] };
  },


  addTweet: function(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest', body: tweetToAdd });

    this.setState({ tweetsList: newTweetsList });
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
    document.getElementByID('main')
  );
});