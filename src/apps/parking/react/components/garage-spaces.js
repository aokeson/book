MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          There are {this.props.open} open spaces and {this.props.total} spaces.
        </div>
      </div>
    );
  }
});
