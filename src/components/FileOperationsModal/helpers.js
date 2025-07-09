export const getAllNodes = (node, result = []) => {
  result.push({ id: node.id, name: node.name, type: node.type });
  node.children?.forEach(child => getAllNodes(child, result));
  return result;
};

export const getFolders = (node, result = []) => {
  if (node.type === 'folder') {
    result.push({ id: node.id, name: node.name });
    node.children?.forEach(child => getFolders(child, result));
  }
  return result;
};