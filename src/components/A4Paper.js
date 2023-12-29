// YourReactComponent.js
import React, { useState } from 'react';
import About from './About';
import TermsAndCond from './TermsAndCond';
import Main from './Main';

const A4Paper = () => {
  const [isDownloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    window.print();
    setDownloaded(true);
  };

  return (
    <div>
      <div className={`border ${isDownloaded ? 'hidden' : 'block'} print:page-break-before`}>
        <Main/>
      </div>
      
     
      
      <div className={`border ${isDownloaded ? 'hidden' : 'block'} print:page-break-before`}>
      {!isDownloaded && (
        <button onClick={handleDownload}>
          Download
        </button>
      )}
      </div>
      
      
    </div>
  );
}

export default A4Paper;
