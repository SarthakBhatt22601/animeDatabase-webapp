import React from 'react';
import './Main.css';
import { AnimeCard } from '../animeCard/AnimeCard';
import PropTypes from 'prop-types';


export default function Main(props) {
    return (
        <div>
            <div className="search-bar">
                <form onSubmit={props.HandleSearch}>
                    <input type="search" placeholder="Search fro anime..." value={props.search} onChange={(e)=>{props.setSearch(e.target.value)}} />
                    <select value={props.type} onChange={(e)=>{props.setType(e.target.value)}}>
                        <option value="anime">Anime</option>
                        <option value="manga">Manga</option>
                        <option value="person">Person</option>
                        <option value="character">Character</option>
                    </select>
                    <button onClick={props.HandleSearch}>Search</button>
                </form>
            </div>
            <div className="display-area">
                {props.animeList?props.animeList.map((anime) => {
                    return (
                        <React.Fragment key={anime.mal_id}>
                            <AnimeCard anime={anime} />
                        </React.Fragment>
                    )    
                }):<h1 style={{float:'left',color:'red'}}>Record Doesn't Exist</h1>}
            </div>
        </div>
    )
}

Main.propTypes = {
    search: PropTypes.string,
}
