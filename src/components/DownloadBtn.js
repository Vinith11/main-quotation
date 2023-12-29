import React, { useState } from 'react'

const DownloadBtn = () => {
    const [isDownloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    window.print();
  };
  return (
    <div>
        {!isDownloaded && (
        <button onClick={handleDownload}>
          Download
        </button>
      )}
    </div>
  )
}

export default DownloadBtn