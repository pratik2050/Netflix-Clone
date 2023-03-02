import React, {useEffect, useState} from "react";
import "../styles/Nav.css"

const Nav = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <img className="nav_logo" src="https://pngimg.com/uploads/netflix/netflix_PNG25.png" alt=""/>
                <img className="nav_avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"/>
            </div>
        </div>
    )
}

export default Nav