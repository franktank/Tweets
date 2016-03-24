var Main = React.createClass({
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
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
});

$(function(){
  React.render(
    <Main />,
    document.getElementByID('main')
  );
});
