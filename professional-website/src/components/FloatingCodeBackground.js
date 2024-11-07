// src/FloatingCodeBackground.js
import React, { useEffect } from 'react';
import './FloatingCodeBackground.css';
import FadingText from './FadingText';

function FloatingCodeBackground() {
  const texts = ["Hello, world!", "Welcome to my site", "Enjoy your stay", "Contact me anytime!"];
  useEffect(() => {
    const codeContainer = document.querySelector('.floating-code-container');

    const codeSnippets = [
      "const x = 42;",
      "function greet() {",
      "console.log('Hello, world!');",
      "let y = x + 5;",
      "if (true) { return; }",
      "// Floating code example",
    ];

    for (let i = 0; i < 20; i++) {
      const codeElement = document.createElement('div');
      codeElement.className = 'floating-code';
      codeElement.innerText = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      
      // Position each element randomly within the viewport
      codeElement.style.left = `${Math.random() * 100}vw`;
      codeElement.style.top = `${Math.random() * 100}vh`;
      
      // Optional: Randomize animation duration slightly for each element
      codeElement.style.animationDuration = `${3 + Math.random() * 5}s`;

      codeContainer.appendChild(codeElement);
    }
  }, []);

  return <div className="floating-code-container">
        <FadingText texts={texts} interval={3000} />
  </div>;
}

export default FloatingCodeBackground;
