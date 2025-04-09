import React from "react";
import './ZakladList.css';
import ZakladItem from "../ZakladItem/ZakladItem";
import { Link } from 'react-router-dom'; // імпортуємо Link

const places = [
    {
        id: '1',
        title: 'Pizza Soprano',
        image: require('../assets/sunIcon.png'),
        schedule: 'понеділок – п’ятниця 08:00 – 21:00\nсубота – неділя 10:00 – 22:00',
        isNew: true
    },
    {
        id: '2',
        title: 'Katana Sushi',
        image: require('../assets/sunIcon.png'),
        schedule: '11:00 – 22:00',
        isNew: false
    }
];

const ZakladList = () => {
    return (
        <div className="list">
            <h2 className="list-title">Всі заклади</h2>
            {places.map(place => (
                <Link key={place.id} to={`/zaklad/${place.id}`} className="zaklad-item-link">
                    <ZakladItem place={place} />
                </Link>
            ))}
        </div>
    );
};

export default ZakladList;
