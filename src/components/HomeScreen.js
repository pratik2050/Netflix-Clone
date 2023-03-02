import React from "react";
import "../styles/HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

const HomeScreen = () => {
    return (
        <div className='homescreen'>
            <Nav />
            <Banner />
        </div>
    )
}

export default HomeScreen;