MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content">
              <img src="Alex.jpg" height="200"/>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content">
              Alex Okeson <br />
              University of Colorado <br />
              B.S. in Computer Science <br />
              Class of 2017 <br />
              <a className="white" href="https://github.com/aokeson">Github</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
