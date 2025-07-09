
import { createSlice } from '@reduxjs/toolkit';
import { initialFileSystem } from '../utils/fileSystemData';
import { v4 as uuid } from 'uuid';

const fileSystemSlice = createSlice({
  name: 'fileSystem',
  initialState: {
    root: initialFileSystem,
    selectedFile: null,
  },
  reducers: {
    selectFile: (state, action) => {
      state.selectedFile = action.payload;
    },
    addItem: (state, action) => {
      const { parentId, name, type } = action.payload;
      const newItem = {
        id: uuid(),
        name,
        type,
        ...(type === 'folder' ? { children: [] } : { content: 'New file content here...' })
      };
      const addToParent = (node) => {
        if (node.id === parentId && node.type === 'folder') {
          node.children.push(newItem);
        } else if (node.children) {
          node.children.forEach(addToParent);
        }
      };
      addToParent(state.root);
    },
    renameItem: (state, action) => {
      const { id, newName } = action.payload;
      const rename = (node) => {
        if (node.id === id) {
          node.name = newName;
        } else if (node.children) {
          node.children.forEach(rename);
        }
      };
      rename(state.root);
    },
    deleteItem: (state, action) => {
      const deleteNode = (node, idToDelete) => {
        if (!node.children) return;
        node.children = node.children.filter(child => child.id !== idToDelete);
        node.children.forEach(child => deleteNode(child, idToDelete));
      };
      deleteNode(state.root, action.payload);
    }
  }
});

export const { selectFile, addItem, renameItem, deleteItem } = fileSystemSlice.actions;
export default fileSystemSlice.reducer;
