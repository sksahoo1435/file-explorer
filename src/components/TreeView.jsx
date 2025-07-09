import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectFile } from '../redux/fileSystemSlice';
import { FaFolder, FaFile } from 'react-icons/fa';
import './TreeNode.css'; 

const TreeNode = ({ node, level = 0 }) => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    if (node.type === 'folder') {
      setExpanded(prev => !prev);
    } else {
      dispatch(selectFile(node));
    }
  };

  return (
    <div className="tree-node" style={{ marginLeft: level * 16 }}>
      <div onClick={handleClick} className="node-label">
        {node.type === 'folder' ? (
          <FaFolder color="#f4b400" style={{ marginRight: 6 }} />
        ) : (
          <FaFile color="#2196f3" style={{ marginRight: 6 }} />
        )}
        {node.name}
      </div>
      {expanded && node.children?.map(child => (
        <TreeNode key={child.id} node={child} level={level + 1} />
      ))}
    </div>
  );
};

const TreeView = ({ data }) => (
  <div className="tree-view">
    <TreeNode node={data} />
  </div>
);

export default TreeView;
