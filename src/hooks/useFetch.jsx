import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_HOST, API_KEY} from "../components/constants/constants";

const localCache = {};

function UseFetch({platform, sortBy, genre, tags}) {

    const [games, setGames] = useState([])

    useEffect(() => {
        if (!localCache[`${platform}${sortBy}${genre}${tags}`]){
            getData();
        } else {
            setGames(localCache[`${platform}${sortBy}${genre}${tags}`])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [platform, sortBy, genre, tags])

    const getData = () => {
        axios.get("/games", {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                "X-RapidAPI-Host": API_HOST,
                "X-RapidAPI-Key": API_KEY
            },
            params: {
                platform,
                category: genre,
                "sort-by": sortBy,
                tags,
            }
        }).then(response => {
            if (response.data.status !== 0) {
                localCache[`${platform}${sortBy}${genre}${tags}`] = response.data
                setGames(localCache[`${platform}${sortBy}${genre}${tags}`])
            } else {
                setGames([])
            }
        }).catch(error => {
            setGames([])
        })
    }

    return {games}
}

export default UseFetch;