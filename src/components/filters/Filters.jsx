import React, {useState} from 'react';
import {GENRES, PLATFORMS, SORT_BY, TAGS} from "./constants";

function Filters({setFilter}) {

    const [platform, setPlatform] = useState(PLATFORMS[0].value);
    const [genre, setGenre] = useState(GENRES[0].value);
    const [tags, setTags] = useState(TAGS[0].value);
    const [sortBy, setSortBy] = useState(SORT_BY[0].value);

    const handlePlatform = (event) => {
        setPlatform(event.target.value);
        setFilter((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleGenre = (event) => {
        setGenre(event.target.value);
        setFilter((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleTags = (event) => {
        setTags(event.target.value);
        setFilter((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSortBy = (event) => {
        setSortBy(event.target.value);
        setFilter((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    return (
        <>
            <label htmlFor="platform">Platform:</label>
            <select name="platform" id="platform" value={platform} onChange={handlePlatform}>
                {PLATFORMS.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>
            <label htmlFor="genre">Genre:</label>
            <select name="genre" id="genre" value={genre} onChange={handleGenre}>
                {GENRES.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>
            <label htmlFor="tags">Tags:</label>
            <select name="tags" id="tags" value={tags} onChange={handleTags}>
                {TAGS.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>
            <label htmlFor="sortBy">Sort by:</label>
            <select name="sortBy" id="sortBy" value={sortBy} onChange={handleSortBy}>
                {SORT_BY.map(({value, display}) => (
                    <option key={value} value={value}>{display}</option>
                ))}
            </select>

        </>
    );
}

export default Filters;