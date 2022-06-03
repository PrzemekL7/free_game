import React from 'react';
import {Link} from "react-router-dom";

function GameCard({game: {thumbnail, title, genre, short_description, id}}) {
    return (
        <Link to={`/games/${id}`} style={{textDecoration: "none", color: "black"}}><div
            style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
                maxWidth: "300px",
                borderRadius: "4px"
            }}
        >
            <img
                style={
                {width: "100%",
                    borderRadius: "4px"}}
                src={thumbnail} alt=""/>
            <h2>{title}</h2>
            <p>Genre: {genre}</p>
            <p>Description: {short_description}</p>
        </div>
        </Link>
    );
}

export default GameCard;