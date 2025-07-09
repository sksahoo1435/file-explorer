import React from 'react';

const TabSwitcher = ({ tab, setTab }) => (
  <div className="tabs">
    <button className={tab === 'create' ? 'active' : ''} onClick={() => setTab('create')}>Create</button>
    <button className={tab === 'rename' ? 'active' : ''} onClick={() => setTab('rename')}>Rename</button>
    <button className={tab === 'delete' ? 'active' : ''} onClick={() => setTab('delete')}>Delete</button>
  </div>
);

export default TabSwitcher;