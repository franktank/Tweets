var Tweet = React.createClass({
  render: function() {
    return(
      <li className="collection-item avatar">
          <img className="circle" src={this.props.gravatar} />
          <span className="title">{this.props.email}</span>
          <time>{this.props.formattedDate}</time>
          <p>{this.props.description}</p>
      </li>
    );
  }
});
