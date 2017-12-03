import React, {Component} from 'react';

// client id= 31c634cec7914998bc4871ee13159431
// client secret= 8122287d257f4474956049e1a96acea7
import './App.css';

const Spotify = require('spotify-web-api-js');
let spotifyApi = new Spotify();
class Busca extends Component {


  constructor(props) {
      super(props);
      this.state = {
        name:[],
        artistas:[],

          albums:[]
      }
  }
  componentDidMount() {

  }
  componentWillMount(){
    //this.searchMusic();
  }
  buscarArtist(){
    var query = prompt('Digite o nome do artista');
    spotifyApi.searchArtists(query)
  .then(data => {
    //console.log('Search artists', data);
    this.setState({ artistas: data.artists.items });
  }, function(err) {
    spotifyApi.refreshAccessToken();
    this.buscarArtist();
    console.error(err);
  });
  }

  render() {
    let client_id = '31c634cec7914998bc4871ee13159431';

    let redirect_uri = 'http://localhost:3000/spotifly';
    let scopes = 'user-read-private user-read-email';
    let token='BQBn8OfdoSXMXRyvqx3clWAtr0LxQo5x5JPczVDebqbEzHxt9FofWC6cepGml_EowMi-uTE_4a8WawacvYHyy3roM4KlqlzNzQTEaoNTgwEHsxQXZ6bcjlJnX7SNtIBQvBsyW75iGOQglLfxNiwxTxj0GPSNBk-jRBbxpHFwD6QGw_KwunPh0bG5GeNcv4tWT4N0fmaydIPhOOS0SMcK0YdQTSt2fS5DLUfG3OpUCi_-3uzkm12p4JrXb-yNhKYpiD8iPg';
    //let spotifyApi = new SpotifyWebApi();height
    spotifyApi.setAccessToken(token);

    return (

      <div >
      <button onClick={this.buscarArtist.bind(this)} >
        Buscar
    </button>
        {this.state.artistas.map((artista) => {
            return (<h4 style={{ padding: 15, background: '#FFFFFF' }} key={artista.id}>
                        {artista.name}
                        {artista.images.map((img) => {
                          if (img.height<180){
                              return (
                                <div key={img.url}>

                                  <a href={artista.external_urls.spotify} target="_blank">
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

export default Busca;
