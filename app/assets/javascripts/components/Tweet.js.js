  render: function() {
    return(
      React.createElement("li", {className: "collection-item avatar"}, 
        React.createElement("i", {className: "material-icons circle"}, "person_pin"), 
          React.createElement("span", {className: "title"}, this.props.name), 
          React.createElement("p", null, this.props.body)
      )
    );
  }
});