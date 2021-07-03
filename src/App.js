import './App.css';
import Header from './MyComponents/header/Header';
import About from './MyComponents/about/About';
import Sidebar from './MyComponents/sidebar/Sidebar';
import Main from './MyComponents/main/Main';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("anime");

  const GetTopAnime = async () =>{
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity').then(res => res.json());

    setTopAnime(temp.top.slice(0, 20));
    setAnimeList(temp.top.slice(0, 20));
  }

  const FetchAnime = async (query,type) =>{
    const api = 'https://api.jikan.moe/v3/search/';
    const api_format = '&order_by=title&sort=asc&page=1&limit=20';
    const url = api + type + '?q=' + query + api_format; 
    const temp = await fetch(url).then(res => res.json()).then(data => data.results);

    setAnimeList(temp);
  }

  const HandleSearch = (e) => {
    e.preventDefault();
    if(!search)
      alert("Can't search blank field");
    else
      FetchAnime(search,type);  
    setSearch("");  
  }

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <Router>
      <Header /> 
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Sidebar topAnime={topAnime} />
          <Main HandleSearch={HandleSearch} search={search} type={type} setType={setType} setSearch={setSearch} animeList={animeList} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;