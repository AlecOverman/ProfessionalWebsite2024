import "./FadingText.css"
import React, { useState, useEffect } from 'react';


const FadingText = ({texts, interval = 7000}) =>{
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const fadeOutTimeout = setTimeout(() => {
          setIsVisible(false); // Start fade-out effect
        }, interval - 1000); // Start fade-out 1 second before switching
    
        const changeTextTimeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle through the texts
          setIsVisible(true); // Start fade-in effect
        }, interval);
    
        return () => {
          clearTimeout(fadeOutTimeout);
          clearTimeout(changeTextTimeout);
        };
      }, [index, interval, texts.length]);

      return (
        <div className="text-container">
          <div className={`fading-text ${isVisible ? 'visible' : 'hidden'}`}>
          {texts[index]}
          </div>

        </div>
      );
    ;
}

export default FadingText;