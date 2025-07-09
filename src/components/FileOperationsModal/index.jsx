import React, { useState } from 'react';
import ModalWrapper from './ModalWrapper';
import TabSwitcher from './TabSwitcher';
import FormCreateFile from './FormCreateFile';
import FormRenameFile from './FormRenameFile';
import FormDeleteFile from './FormDeleteFile';
import './FileOperationsModal.css';

const FileOperationsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState('create');

  const renderTabContent = () => {
    switch(tab) {
      case 'create': return <FormCreateFile onClose={() => setIsOpen(false)} />;
      case 'rename': return <FormRenameFile onClose={() => setIsOpen(false)} />;
      case 'delete': return <FormDeleteFile onClose={() => setIsOpen(false)} />;
      default: return null;
    }
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>Manage Files</button>
      {isOpen && (
        <ModalWrapper title="File Manager" onClose={() => setIsOpen(false)}>
          <TabSwitcher tab={tab} setTab={setTab} />
          {renderTabContent()}
        </ModalWrapper>
      )}
    </div>
  );
};

export default FileOperationsModal;