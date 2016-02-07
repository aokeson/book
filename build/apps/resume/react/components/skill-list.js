MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          {this.props.skill}
        </div>
      </div>
    );
  }

});

MyComponents.SkillList = React.createClass({
  render: function() {
    var skillElements = this.props.skills[11].map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          {skillElements}
        </div>
      </div>
    );
  }
});
