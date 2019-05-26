import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../../styles/App.css'

const renderLink = (link) => {
    if (link) {
        return (
            <>
            <h1>Your audio here</h1>
            <h1>{link}</h1>
            <div className="link-card-container" >
                <audio controls autoPlay>
                    <source src={link}  type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            </>
        ) 
    } else {
        return (
            <div className="link-card-container">
                <p>Please provide text!</p>
            </div>
        )
        
    }
}

const LinkCard = (props) => {
    return (
        renderLink(props.myLink)
        
    );
}

export default LinkCard;