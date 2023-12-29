// YourReactComponent.js
import React, { useState } from 'react';
import About from './About';
import TermsAndCond from './TermsAndCond';

const A4Paper = () => {
  const [isDownloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    window.print();
    setDownloaded(true);
  };

  return (
    <div>
      <div className={`border ${isDownloaded ? 'hidden' : 'block'}`} style={{ pageBreakBefore: 'always' }}>
        <About/>
      </div>
      
      <div className={`border ${isDownloaded ? 'hidden' : 'block'}`} style={{ pageBreakBefore: 'always' }}>
        <TermsAndCond/>
      </div>
      
      <div className={`border ${isDownloaded ? 'hidden' : 'block'}`} style={{ pageBreakBefore: 'always' }}>
        {/* Content for the third page */}
      </div>
      
      {!isDownloaded && (
        <button onClick={handleDownload}>
          Download
        </button>
      )}
    </div>
  );
}

export default A4Paper;
