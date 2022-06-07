import React from 'react';
import {Link, useParams} from "react-router-dom";
import useFetchGame from "../../hooks/useFetchGame";

function GameDetails() {

    const {id} = useParams()

    const {game: {title, game_url, status, platform, publisher, release_date, description, screenshots}} = useFetchGame(id)

    return (
        <div style={{
            maxWidth: "600px",
            width: "100%",
            margin: "20px auto",
            padding: "10px"}}>
            <Link
                style={{
                    textDecoration: "none",
                    background: "blue",
                    color: "white",
                    fontWeight: "bold",
                    padding:"15px 30px",
                    borderRadius: "15px",
                    margin: "5px 0",
                    textTransform: "uppercase"}}
                to="/"
            >
                Return</Link>
            <a
                href={game_url}
                style={{
                    textDecoration: "none",
                    color: "black"}}
                target="_blank"
                rel="noreferrer"
            >
                <h1>
                    {title}
                    {" "}
                    <span
                        style={{fontSize: "10px"}}
                    >{status}</span>
                </h1>
            </a>
            <p>{platform}</p>
            <p><b>Publisher:</b> {publisher}, <b>Release date:</b> {release_date}</p>
            <p>{description}</p>
            <div style={{
                display: "flex",
                flexWrap: "wrap"}}>
                {screenshots && (
                        screenshots.map(({image, id}) => (
                            <img
                                style={{
                                    maxWidth: "280px",
                                    width: "100%",
                                    padding: "0 10px 10px 0"}}
                                src={image}
                                alt={image.split('/')[5].split('.')[0]} key={id}/>
                        ))
                )}
            </div>
        </div>
    );
}

export default GameDetails;