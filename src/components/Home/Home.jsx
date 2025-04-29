import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./Home.css";
import ZakladList from "./ZakladList/ZakladList";

import DeliveryInfo from "./DeliveryInfo/DeliveryInfo"; 
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
    const deliveryRef = useRef(null);
    const aboutUsRef = useRef(null);
    const zakladRef = useRef(null);      
    const categoryRef = useRef(null); 
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#delivery-info" && deliveryRef.current) {
            deliveryRef.current.scrollIntoView({ behavior: "smooth" });
        } else if (location.hash === "#about-us" && aboutUsRef.current) {
            aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="home">
            <div className="home-background">
            <div className="home-content">
            <h1 style={{ color: 'white' }}>Ваша доставка</h1>
            </div>
            </div>
           
            <div className="home-list-wrapper">
            <div ref={zakladRef} className="scroll-target">
             <ZakladList />
            </div>
            
                <div ref={deliveryRef} id="delivery-info">
                    <DeliveryInfo />
                </div>
                <div ref={aboutUsRef} id="about-us">
                    <AboutUs />
                </div>
            </div>
        </div>
    );
};

export default Home;
