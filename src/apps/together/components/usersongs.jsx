MyComponents.userSong = React.createClass({
 render: function() {
   var songName = this.props.song[1]['songName']
   var artist = this.props.song[1]['artist']
   
   if (typeof this.props.song[1]['album'] == "undefined"){
    var album = "None Provided"
   }
   else{
    var album = this.props.song[1]['album']
   }

   // TODO - Iterate through upVote and downVote list and check if the user's name is in one of them
   // If it is, color that list item accordingly
   // Only do it if the user is logged in so make sure to check logged condition.

   if (typeof this.props.song[1]['upVote'] == "undefined") {
    var upVotes = 0
   }
   else{
    var upVotesList = this.props.song[1]['upVote']
    var upVotes = Object.keys(upVotesList).length
   }

   if (typeof this.props.song[1]['downVote'] == "undefined") {
    var downVotes = 0
   }
   else{
    var downVotesList = this.props.song[1]['downVote']
    var downVotes = Object.keys(downVotesList).length
   }

   var voteCount = upVotes - downVotes

  return (
    <li>
      <div className="collapsible-header">{ songName }</div>
      <div className="collapsible-body"><p>Artist: { artist }<br/>Album: { album }<br/>Votes: { voteCount }</p></div>
    </li>
  );
 }
});

class UserSongs extends React.Component {
  render(){
    var u = this.props.user
    if (u) {
      var songList = this.props.songList.map(function(s,i){
        if (s[1]['displayName'] == u['username']) {
          return <MyComponents.userSong song={s} key={i} user={u}/>
        }
      })
    }

    else {
      songList = "Login to see the songs you suggested"
    }

    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s1"><i className="small material-icons">mic</i></div>
              <div className="col s6"><h6>Songs I Suggested</h6></div>
              <div className="progress ">
                <div className="determinate"></div>
              </div>
            </div>      
            <ul className="collapsible" data-collapsible="expandable">
              { songList }
            </ul>
          </div>
        </div>      
      </div>
    )
  }
  componentDidMount(){
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false
      });
    });
  }
}
MyComponents.UserSongs = UserSongs