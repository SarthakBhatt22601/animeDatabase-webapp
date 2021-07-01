import React from 'react';
import './Header.css';
import {
    Link
  } from "react-router-dom";

export default function Header( props ) {
    return (
        <div>
            <nav>
                <Link to="/"><h1>The <span>Anime</span> Database</h1></Link>
                <a href="https://github.com/SarthakBhatt22601/animeDatabase-webapp" target="_blank" rel="noreferrer"><p>Github Repo</p></a>
                <Link to="/about"><p>About</p></Link>
                <Link to="/"><p>Home</p></Link>
            </nav>
        </div>
    )
}
