MyComponents.City = React.createClass({

  render: function() {
    var vals = [];
    var temp = this.props.city.currently.apparentTemperature;
    var weather = this.props.city.currently.icon;
    var wind = this.props.city.currently.windSpeed;
    var precipProbability = this.props.city.currently.precipProbability*100;
    var precipIntensity = this.props.city.currently.precipIntensity;
    var pressure = this.props.city.currently.pressure;
    var humidity = this.props.city.currently.humidity*100;
    if(this.props.city.latitude == 39.7391667){
      vals.push(<span><h4>Denver</h4>
        Current Temperature: {temp} degrees F
        <br />Weather: {weather}
        <br />Wind: {wind} mph
        <br />Possibility of Precipitation: {precipProbability}% chance
        <br />Amount of Precipitation: {precipIntensity} inches per hour
        <br />Pressure: {pressure} mbar
        <br />Relative Humidity: {humidity}%</span>)
    } if(this.props.city.latitude == 47.6063889){
      vals.push(<span><h4>Seattle</h4>
        Current Temperature: {temp} degrees F
        <br />Weather: {weather}
        <br />Wind: {wind} mph
        <br />Possibility of Precipitation: {precipProbability}% chance
        <br />Amount of Precipitation: {precipIntensity} inches per hour
        <br />Pressure: {pressure} mbar
        <br />Relative Humidity: {humidity}%</span>)
    } if(this.props.city.latitude == 34.0522222){
      vals.push(<span><h4>Los Angeles</h4>
        Current Temperature: {temp} degrees F
        <br />Weather: {weather}
        <br />Wind: {wind} mph
        <br />Possibility of Precipitation: {precipProbability}% chance
        <br />Amount of Precipitation: {precipIntensity} inches per hour
        <br />Pressure: {pressure} mbar
        <br />Relative Humidity: {humidity}%</span>)
    } if(this.props.city.latitude == 38.895){
      vals.push(<span><h4>Washington</h4>
        Current Temperature: {temp} degrees F
        <br />Weather: {weather}
        <br />Wind: {wind} mph
        <br />Possibility of Precipitation: {precipProbability}% chance
        <br />Amount of Precipitation: {precipIntensity} inches per hour
        <br />Pressure: {pressure} mbar
        <br />Relative Humidity: {humidity}%</span>)
    } if(this.props.city.latitude == 37.775){
      vals.push(<span><h4>San Francisco</h4>
        Current Temperature: {temp} degrees F
        <br />Weather: {weather}
        <br />Wind: {wind} mph
        <br />Possibility of Precipitation: {precipProbability}% chance
        <br />Amount of Precipitation: {precipIntensity} inches per hour
        <br />Pressure: {pressure} mbar
        <br />Relative Humidity: {humidity}%</span>)
    } 
    
    


    return (
      <div className="card">
        <div className="card-content">
          {vals}
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">

          {cityElements}

        </div>
      </div>
    );
  }
});
