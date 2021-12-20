import React from 'react'
import {FaPlay} from 'react-icons/fa';
import '../buttons/PlayButton.css';



function PlayButton({handleClick}) {

    return (
        <button
            className="orange-btn back-btn"
            type="button"
            onClick={handleClick}>
<FaPlay/>
        </button>
    );
}

export default PlayButton;