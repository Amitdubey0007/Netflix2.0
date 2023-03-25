import React from "react";
import Banner from "../components/Banner";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import requests from "../components/Requests";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />

      {/* rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Action Movies" fetchURL={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchTopRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchTopDocumentaries} />
    </div>
  );
}

export default HomeScreen;
