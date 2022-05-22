import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from './Banner'
import Navbar from './Navbar'
function App() {
  return (
    <div className="app">
      {/**Navbar */}
      <Navbar/>
      {/**Banner */}
      <Banner/><br/>
      {console.log(request.Actionmovies)}
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.netflixoriginals}/>
      <Row title="Most Popular" fetchUrl={request.trendingmovies}/>
      <Row title="COMMING SOON...." fetchUrl={request.upcomming}/>
    {/**<Row title="NEW ARRIVAL(TAMIL)" fetchUrl={request.newArrival}/> */}
      <Row title="Action movies" fetchUrl={request.Actionmovie}/>
      <Row title="Comedy movies" fetchUrl={request.comedymovies}/>
      <Row title="Horror movies" fetchUrl={request.horrormovies}/>
      {/* <Row title="PREVIOUS YEAR (TAMIL)" fetchUrl={request.lastyearhits}/> */}
    </div>
  );
}

export default App;
