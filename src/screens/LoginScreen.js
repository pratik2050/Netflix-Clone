import React from "react";
import "../styles/LoginScreen.css";

const LoginScreen = () => {
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                    className="loginScreen_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <button className="loginScreen_button">
                    Sign In
                </button>

                <div className="loginScreen_gradient" />
            </div>

            <div className="loginScreen_body">
                <>
                    <h1>NETFLIX Clone Made By Pratik Das</h1>
                    <h2>Made with React Redux, Firebase Authentication <br/> and Stripe Payment Gateway</h2>
                    <h3>Ready to Try? Enter Email Address to continue</h3>

                    <div className="loginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button className="loginScreen_getStarted">GET STARTED</button>
                        </form>
                    </div>
                </>
            </div>
        </div>
    )
}

export default LoginScreen;