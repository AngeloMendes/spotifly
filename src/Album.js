import React, {Component} from 'react';

// client id= 31c634cec7914998bc4871ee13159431
// client secret= 8122287d257f4474956049e1a96acea7
import './App.css';

const Spotify = require('spotify-web-api-js');
let spotifyApi = new Spotify();
class Album extends Component {


  constructor(props) {
      super(props);
      this.state = {
        name:[],
        id:null,
        external_url:null,
          //name: null,
          albums:[]
      }
  }
  componentDidMount() {

    this.getdata();
}

  getdata(){
      spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
        .then(data => {

//          console.log('Artist albums', data);
          this.setState({ albums: data.items });
    }, function(err) {
      spotifyApi.refreshAccessToken();
    this.getdata();
      //console.error(err);
    });
  }


  render() {
    let client_id = '31c634cec7914998bc4871ee13159431'; // Your client id

    let redirect_uri = 'http://localhost:3000/spotifly'; // Your redirect uri

    let token='BQBn8OfdoSXMXRyvqx3clWAtr0LxQo5x5JPczVDebqbEzHxt9FofWC6cepGml_EowMi-uTE_4a8WawacvYHyy3roM4KlqlzNzQTEaoNTgwEHsxQXZ6bcjlJnX7SNtIBQvBsyW75iGOQglLfxNiwxTxj0GPSNBk-jRBbxpHFwD6QGw_KwunPh0bG5GeNcv4tWT4N0fmaydIPhOOS0SMcK0YdQTSt2fS5DLUfG3OpUCi_-3uzkm12p4JrXb-yNhKYpiD8iPg';
    //let spotifyApi = new SpotifyWebApi();height
    spotifyApi.setAccessToken(token);

    return (

      <div >
        <h1>Álbuns do Elvis Presley</h1>
        {this.state.albums.map((album) => {
            return (<h4 style={{ padding: 15, background: '#FFFFFF' }} key={album.id}>
              {album.name}
              {album.artists.map((artist) => {
                    return (
                      <p key={artist.id}>
                        {artist.name}
                      </p>)
                    })
              }
              {album.images.map((img) => {
                if (img.height==300){
                    return (
                      <div key={img.url}>

                        <a href={album.external_urls.spotify} target="_blank">
                            <img src={img.url}/>
                          </a>
                      </div>);}
                    })
              }
            </h4>);
        })}
      </div>

      );

  }



}

export default Album;
