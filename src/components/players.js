import React from 'react';

const players = (props) => {
    console.log(props)
    const renderPlayers = (players) => {
        return players ? 
            players.map(
                player => <h1 key={player.id}>{player.name}</h1>
            ) : null
    }
    return (
        <div>
            {renderPlayers(props.data.players)}    
        </div>
    );
};

export default players;