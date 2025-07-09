import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../redux/fileSystemSlice';
import { deleteSchema } from './formSchemas';
import { getAllNodes } from './helpers';

const FormDeleteFile = ({ onClose }) => {
  const dispatch = useDispatch();
  const root = useSelector(state => state.fileSystem.root);
  const items = getAllNodes(root);

  return (
    <Formik
      initialValues={{ deleteId: '' }}
      validationSchema={deleteSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(deleteItem(values.deleteId));
        resetForm();
        onClose();
      }}
    >
      <Form className="form-section">
        <label>Select Item to Delete</label>
        <Field as="select" name="deleteId">
          <option value="" disabled>-- Please select an item --</option>
          {items.map(item => (
            <option key={item.id} value={item.id}>{item.name} ({item.type})</option>
          ))}
        </Field>
        <ErrorMessage name="deleteId" component="div" className="error" />

        <button type="submit">Delete</button>
      </Form>
    </Formik>
  );
};

export default FormDeleteFile;