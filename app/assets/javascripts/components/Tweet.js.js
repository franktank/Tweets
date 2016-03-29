  render: function() {
    return(
      React.createElement("li", {className: "collection-item avatar"}, 
          React.createElement("img", {className: "circle", src: this.props.gravatar}), 
          React.createElement("span", {className: "title"}, this.props.email), 
          React.createElement("time", null, this.props.formattedDate), 
          React.createElement("p", null, this.props.description)
      )
    );
  }
});