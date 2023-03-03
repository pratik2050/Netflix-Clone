import React from "react";
import "../styles/HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import request from "../movie_api/Request";
import Row from "./Row";

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <Nav />

            <Banner />

            <Row title="Netflix Originals" fetchURL={request.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchURL={request.fetchTrending} />
            <Row title="Top Rated" fetchURL={request.fetchTopRated} />
            <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchURL={request.fetchRomanceMovies} />
            <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen;