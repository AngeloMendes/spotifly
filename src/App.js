import React, {Component} from 'react';
import logo from'./logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Image from 'material-ui-image'
import FlatButton from 'material-ui/FlatButton';
import {BrowserRouter, Route} from 'react-router-dom';
import Busca from './Busca';
import Album from './Album';

import './App.css';

const Spotify = require('spotify-web-api-js');
let spotifyApi = new Spotify();
class App extends Component {
componentDidMount() {


  }
  componentWillMount(){
    //this.searchMusic();
  }

  render() {
    let client_id = '31c634cec7914998bc4871ee13159431'; // Your client id

    let redirect_uri = 'http://localhost:3000/spotifly'; // Your redirect uri
    let scopes = 'user-read-private%20user-read-email';
    let token='BQBn8OfdoSXMXRyvqx3clWAtr0LxQo5x5JPczVDebqbEzHxt9FofWC6cepGml_EowMi-uTE_4a8WawacvYHyy3roM4KlqlzNzQTEaoNTgwEHsxQXZ6bcjlJnX7SNtIBQvBsyW75iGOQglLfxNiwxTxj0GPSNBk-jRBbxpHFwD6QGw_KwunPh0bG5GeNcv4tWT4N0fmaydIPhOOS0SMcK0YdQTSt2fS5DLUfG3OpUCi_-3uzkm12p4JrXb-yNhKYpiD8iPg';
    //let spotifyApi = new SpotifyWebApi();height
    spotifyApi.setAccessToken(token);
    let params = new URLSearchParams(document.location.search.substring(1));
    let name = params.get("code"); // is the string "Jonathan"


    return (
      <div>
        <img src={logo}  height="240" width="490"/>
        {name?   <div>
            <BrowserRouter>
                <div>
                  <Busca/>
                  <Album/>


                </div>
            </BrowserRouter>
          </div> :
           <a href={"https://accounts.spotify.com/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri+"&scope="+scopes+"&response_type="+'code'+"&state="+123}>Login</a>}




      </div>

      );

  }



}

export default App;
