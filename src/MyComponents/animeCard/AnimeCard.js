import React from 'react';
import './AnimeCard.css';

export const AnimeCard = ({ anime }) =>{
    return(
        <div className="anime-card">
            <a href={anime.url} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
                <img src={anime.image_url} alt="anime_image" />
                <h2>{ anime.title }</h2>
            </a>
        </div>
    )
}