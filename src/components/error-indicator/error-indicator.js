import React from 'react';

import './error-indicator.css';
// import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src="https://github.com/Juriy/pro-react-redux/blob/master/star-db/30-lifecycle-intro/src/components/error-indicator/death-star.png?raw=true" alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;