var Tweet = React.createClass({
  render: function() {
    return(
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
          <span className="title">{this.props.name}</span>
          <p>{this.props.body}</p>
      </li>
    );
  }
});
