import React from 'react';
import useMusicPlayer from '../hooks/useMusicPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'


const PlayerControls = () => {

    const music = useMusicPlayer();
    return (
        <div>
            <div>
            <p>{music.currentTrackName}</p>
        </div>
        <button>
            <FontAwesomeIcon icon={faStepBackward} onClick={music.playPreviousTrack}
            />
        </button>
        <button onClick={music.togglePlay}>
            {music.isPlaying ? (
                <FontAwesomeIcon icon={faPause}></FontAwesomeIcon>
            ) : <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>}
        </button>
        <button>
            <FontAwesomeIcon icon={faStepForward} onClick={music.playNextTrack}></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default PlayerControls;