MyComponents.Hour = React.createClass({
 render: function() {

   var keyMap = {'BEG': 'Open ', 'END': '-', 'FROM': '   ', 'TO': ' through ', }
   var vals = [];
   for(var key in this.props.hour) {
     vals.push(<span key={key}>{keyMap[key]}{this.props.hour[key]}</span>);
   }

   return (
     <div className="card">
       <div className="card-content">
         <p>
         { vals }
         </p>
       </div>
     </div>
   );
 }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display the hours of this garage.
          Raw props data is {JSON.stringify(this.props)}

          { hours }

        </div>
      </div>
    );
  }
});
