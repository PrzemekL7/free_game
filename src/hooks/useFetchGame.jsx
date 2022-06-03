import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_HOST, API_KEY} from "../components/constants/constants";

function UseFetchGame(id) {
    const [game, setGame] = useState({});

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`/game`, {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "X-RapidAPI-Host": API_HOST,
                "X-RapidAPI-Key": API_KEY
            },
            params: {
                id
            },
        }).then(response => setGame(response.data))
            .catch(error => setGame([]))
    }

    return {game};

}

export default UseFetchGame;