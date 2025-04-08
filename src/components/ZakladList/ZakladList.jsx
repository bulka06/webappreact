import React from "react";
import './ZakladList.css';
import ZakladItem from "../ZakladItem/ZakladItem";

const places = [
    {
        id: '1',
        title: 'Чудовий ранок',
        image: require('../assets/sunIcon.png'), 
        schedule: 'понеділок – п’ятниця 08:00 – 21:00\nсубота – неділя 10:00 – 22:00',
        isNew: true
    },
    {
        id: '2',
        title: 'Sushi Zoom',
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
                <ZakladItem
                    key={place.id}
                    place={place}
                />
            ))}
        </div>
    );
};

export default ZakladList;
