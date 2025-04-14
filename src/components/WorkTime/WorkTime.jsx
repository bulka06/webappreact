import React from 'react';
import './WorkTime.css';

const WorkTime = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Служба доставки <br /><strong>FastGo</strong></h3>
        <ul className="schedule">
          <li>Понеділок — 8:00 - 23:59</li>
          <li>Вівторок — 7:00 - 23:59</li>
          <li>Середа — 7:00 - 23:59</li>
          <li>Четвер — 7:00 - 23:59</li>
          <li>П’ятниця — 7:00 - 23:59</li>
          <li>Субота — 7:00 - 23:59</li>
          <li>Неділя — 8:00 - 23:00</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkTime;
