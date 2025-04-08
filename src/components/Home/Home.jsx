import React from "react";
import "./Home.css";
import useTelegram from "../hooks/useTelegram";

const Home = () => {
    const { user } = useTelegram();

    return (
        <div className="home">
            
        </div>
    );
};

export default Home;