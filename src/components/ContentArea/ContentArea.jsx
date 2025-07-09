import React from 'react';
import { useSelector } from 'react-redux';
import './ContentArea.css';

const ContentArea = () => {
  const selected = useSelector(state => state.fileSystem.selectedFile);

  return (
    <div className="content-area">
      {selected ? (
        <>
          <h2>{selected.name}</h2>
          {selected.type === 'file' ? (
            <pre className="file-preview">{selected.content || 'No content available.'}</pre>
          ) : (
            <p>Folder selected.</p>
          )}
        </>
      ) : (
        <p>Select a file to view its contents.</p>
      )}
    </div>
  );
};

export default ContentArea;
