import React from "react";
import './ZakladItem.css';

const ZakladItem = ({ place }) => {
    return (
        <div className="place-card">
            {place.isNew && <div className="new-label">Новинка!</div>}
            <img src={place.image} alt={place.title} className="place-image" />
            <div className="place-info">
                <h3 className="place-title">{place.title}</h3>
                <p className="place-schedule">
                {place.schedule.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                 {line.replace(/^\s+|\s+$/g, '')} {/* Видаляємо пробіли на початку та в кінці */}
                <br />
                </React.Fragment>
                ))}
                </p>

            </div>
        </div>
    );
};

export default ZakladItem;
