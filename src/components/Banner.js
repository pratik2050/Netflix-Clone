import React, {useEffect, useState} from "react";
import "../styles/Banner.css"
import axios from "../movie_api/Axios";
import request from "../movie_api/Request";

const Banner = () => {
    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const movieRequest = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                movieRequest.data.results[
                    Math.floor(Math.random() * movieRequest. data.results.length - 1)
                    ]
            );
            return movieRequest;
        }
    }, [])


    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n-1) + "....." : string;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate('this is a string', 150)}</h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner