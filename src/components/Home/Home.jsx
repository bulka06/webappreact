import React from "react";
import "./Home.css";
import useTelegram from "../hooks/useTelegram";
import homeIcon from "../assets/homeIcon.jpg"; // Змінили шлях до зображення

const Home = () => {
    const { user } = useTelegram();

    return (
        <div className="home">
            <img src={homeIcon} alt="Головна картинка" className="home-image" />
        </div>
    );
};

export default Home;
