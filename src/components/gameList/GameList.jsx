import React, {useState} from 'react';
import useFetch from "./../../hooks/useFetch"
import GameCard from "../gameCard/GameCard";

function GameList() {

    const [filter, setFilter] = useState({
        platform: "browser",
        sortBy: "relevance"
    });

    const {games} = useFetch(filter);

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {games.map((game) => (
                <GameCard key={game.id} game={game}/>
            ))}
        </div>
    );
}

export default GameList;