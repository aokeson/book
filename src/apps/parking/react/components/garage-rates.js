MyComponents.Rate = React.createClass({
 render: function() {

   var keyMap = {'BEG': 'Beginning', 'END': 'End', 'RATE': 'Rate', 'RQ': 'Type of Rate', 'RR': 'Other Info', 'DESC': 'Description', }
   var vals = [];
   for(var key in this.props.rate) {
     vals.push(<span key={key}>{keyMap[key]}: {this.props.rate[key]}<br /></span>);
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


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          TODO: This is a component to display the rates of this garage.
          Raw props data is {JSON.stringify(this.props)}

          { rates }

        </div>
      </div>
    );
  }
});
