import './App.css';
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MusicContext } from './contexts/MusicContext';
import PlayerControls from './components/PlayerControls';
import { useState } from 'react';
import TrackList from './components/TrackList';

function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio('https://pagalfree.com/download/320-Lagi%20Lagi%20-%20Aksar%20320%20Kbps.mp3'),
    tracks: [
      {
        name:'Track 1',
        file:'https://pagalfree.com/download/320-Lagi%20Lagi%20-%20Aksar%20320%20Kbps.mp3'
      },
      {
        name:'Track 2',
        file:'https://pagalfree.com/download/320-Ishq%20Hua%20-%20Aaja%20Nachle%20320%20Kbps.mp3'
      },
      {
        name:'Track 3',
        file:'https://pagalfree.com/download/320-Waada%20Tainu%20-%20Aap%20Kaa%20Surroor%20320%20Kbps.mp3'
      },
      {
        name:'Track 4',
        file:'https://pagalfree.com/download/320-Bhool%20Bhulaiyaa%20-%20Bhool%20Bhulaiyaa%20320%20Kbps.mp3'
      },
      {
        name:'Track 5',
        file:'https://pagalfree.com/download/320-Cash%20(Extended%20Mix)%20-%20Cash%20320%20Kbps.mp3'
      },
      {
        name:'Track 6',
        file:'https://pagalfree.com/download/320-Naughty%20Naughty%20-%20Cash%20320%20Kbps.mp3'
      },
      {
        name:'Track 7',
        file:'https://pagalfree.com/download/320-Jhalak%20Dikhla%20Ja%20-%20Aksar%20320%20Kbps.mp3'
      },
      {
        name:'Track 8',
        file:'https://pagalfree.com/download/320-Rehem%20Kare%20-%20Cash%20320%20Kbps.mp3'
      }
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  })

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
      <p style={{color:'white', fontSize:'5rem'}}>Hey Music <FontAwesomeIcon style={{color:'purple', fontSize:'5rem'}} icon={faMusic}/></p>
      <div>
      <PlayerControls></PlayerControls>
      <TrackList></TrackList>
      </div>
      
      
    </div>
    </MusicContext.Provider>
  );
}

export default App;
