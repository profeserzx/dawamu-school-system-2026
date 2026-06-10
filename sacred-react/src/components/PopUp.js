import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/comp_css/popup.css';
import BackgroundImage from '../images/img3.jpg';

function PopUp() {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleApplyNow = () => {
    setIsVisible(false);
    navigate('/contact');
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div
        className="popup-content"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
        ref={popupRef}
      >
        <button
          className="close-button"
          onClick={handleClose}
          aria-label="Close popup"
        >
          &times;
        </button>
        <h2 id="popup-title">Admissions Open!</h2>
        <p>Enroll now for the academic year 2026-2027. Limited seats available!</p>
        <button className="cta-button" onClick={handleApplyNow}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default PopUp;
