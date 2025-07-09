import * as Yup from 'yup';

export const createSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  parentId: Yup.string().required('Parent folder is required'),
  type: Yup.string().oneOf(['file', 'folder']).required(),
});

export const renameSchema = Yup.object({
  renameId: Yup.string().required('Select item to rename'),
  renameTo: Yup.string().required('New name is required'),
});

export const deleteSchema = Yup.object({
  deleteId: Yup.string().required('Select item to delete'),
});