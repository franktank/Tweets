  render: function() {
    let tweets = this.props.tweets.map(tweet => React.createElement(Tweet, React.__spread({key: tweet.id},  tweet)));
    return(
      React.createElement("div", null, 
        React.createElement("ul", {className: "collection"}, 
          tweets
        )
      )
    );
  }
});