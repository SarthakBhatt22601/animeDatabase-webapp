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
                    <button onClick={props.HandleSearch}>Search</button>
                </form>
            </div>
            <div className="display-area">
                {props.animeList.map((anime) => {
                    return (
                        <React.Fragment key={anime.mal_id}>
                            <AnimeCard anime={anime} />
                        </React.Fragment>
                    )    
                })}
            </div>
        </div>
    )
}

Main.propTypes = {
    search: PropTypes.string,
}
