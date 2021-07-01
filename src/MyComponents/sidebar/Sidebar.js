import React from 'react';
import './Sidebar.css';

export default function Sidebar( props ) {
    return (
        <div>
            <aside>
                <h2>Top Animes</h2>
                    {props.topAnime.map((anime) => {
                        return (
                            <React.Fragment  key={anime.mal_id}>
                            <a href={ anime.url } target="_blank" rel="noreferrer" style={{textDecoration:'none'}}><p>{anime.rank} . {anime.title}</p></a>
                            </React.Fragment>
                        )
                    })}
            </aside>
        </div>
    )
}
