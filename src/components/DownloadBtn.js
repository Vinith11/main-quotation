import React, { useState } from 'react'

const DownloadBtn = () => {
    const [isDownloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    window.print();
  };
  return (
    <div className="w-a4-w h-a4-h">
        {!isDownloaded && (
        <button onClick={handleDownload}>
          Download
        </button>
      )}
    </div>
  )
}

export default DownloadBtn