import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { renameItem } from '../../redux/fileSystemSlice';
import { renameSchema } from './formSchemas';
import { getAllNodes } from './helpers';

const FormRenameFile = ({ onClose }) => {
  const dispatch = useDispatch();
  const root = useSelector(state => state.fileSystem.root);
  const items = getAllNodes(root);

  return (
    <Formik
      initialValues={{ renameId: '', renameTo: '' }}
      validationSchema={renameSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(renameItem({ id: values.renameId, newName: values.renameTo }));
        resetForm();
        onClose();
      }}
    >
      <Form className="form-section">
        <label>Select Item</label>
        <Field as="select" name="renameId">
          <option value="" disabled>-- Please select an item --</option>
          {items.map(item => (
            <option key={item.id} value={item.id}>{item.name} ({item.type})</option>
          ))}
        </Field>
        <ErrorMessage name="renameId" component="div" className="error" />

        <label>New Name</label>
        <Field name="renameTo" placeholder="New name..." />
        <ErrorMessage name="renameTo" component="div" className="error" />

        <button type="submit">Rename</button>
      </Form>
    </Formik>
  );
};

export default FormRenameFile;