function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }


  function drawSongs(results){
    var songs = results
    var template = ''
    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
     
      template += `
      <div class = "row d-flex justify-content-center">
        <div class = "card d-flex align-items-center card1-bg col-4" style = "width: 30rem">
          <img src="${song.albumArt}" alt="" style = "width: 20rem">
        <div class="card-body">
          <h3>Title: ${song.title}</h3>
          <h3>Artist: ${song.artist}</h3>
          <h3>Collecion: ${song.collection}</h3>
          <button> Price: ${song.price}</button> 
          <audio controls controlsList = "nodownload">
          <source src=${song.preview} type="audio/ogg">
          </audio> 
        </div>
        </div>
      </div>
      ` 
      }
      document.getElementById('songs').innerHTML = template
    }
  
  }


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
