var TweetBox = React.createClass({displayName: "TweetBox",
  sendTweet: function(event){
    event.preventDefault();
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value='';
  },

  render: function() {
    return(
    React.createElement("div", {className: "row"}, 
      React.createElement("form", {onSubmit: this.sendTweet.bind(this)}, 
        React.createElement("div", {className: "input-field"}, 
          React.createElement("textArea", {ref: "tweetTextArea", className: "materialize-textarea"}), 
          React.createElement("label", null, "What's happening?"), 
          React.createElement("button", {type: "submit", className: "btn right"}, "Tweet")
        )
      )
    )
    );
  }
});