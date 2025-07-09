
import React from 'react';
import TreeView from './components/TreeView';
import { useSelector } from 'react-redux';
import './App.css';
import FileOperationsModal from './components/FileOperationsModal/index'
import ContentArea from './components/ContentArea/ContentArea';

function App() {
  const fileSystem = useSelector(state => state.fileSystem.root);
  return (
    <div className="app-container">
      <div className="sidebar">
        <TreeView data={fileSystem} />
      </div>
      <div className="content">
        <div className="top-bar">
          <FileOperationsModal />
        </div>
        <ContentArea />
      </div>

    </div>
  );
}

export default App;
