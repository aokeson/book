MyComponents.Task = React.createClass({

  render: function() {
    var vals = [(<span><h4>{this.props.task.name}</h4>
      Assigned To: {this.props.task.assigned}
      <br />Priority: {this.props.task.priority}
      <br />Type: {this.props.task.type}
      <br />Due Date: {this.props.task.deadline}</span>)]
    return (
      <div className="card">
        <div className="card-content">
          {vals}
        </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {
    console.log("this.props", this.props.tasks)
    var taskElements = this.props.tasks.map(function(t,i){
      if(t.assigned == "Alex"){
        return <MyComponents.Task task={t} key={i}/>
      }
    })

    return (
      <div className="card">
        <div className="card-content">
          {taskElements}
        </div>
      </div>
    );
  }
});
