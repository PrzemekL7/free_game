import React, {useState} from 'react';
import useFetch from "./../../hooks/useFetch"
import GameCard from "../gameCard/GameCard";
import Filters from "../filters/Filters";

function GameList() {

    const [filter, setFilter] = useState({
        platform: "browser",
        sortBy: "relevance"
    });

    const {games} = useFetch(filter);

    return (
        <>
            <Filters setFilter={setFilter}/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </div>
        </>
    );
}

export default GameList;