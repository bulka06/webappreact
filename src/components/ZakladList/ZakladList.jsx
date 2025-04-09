import React from "react";
import './ZakladList.css';
import ZakladItem from "../ZakladItem/ZakladItem";
import { Link } from 'react-router-dom'; // імпортуємо Link
import { places } from '../Data/data';



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
