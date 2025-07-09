import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/fileSystemSlice';
import { createSchema } from './formSchemas';
import { getFolders } from './helpers';

const FormCreateFile = ({ onClose }) => {
  const dispatch = useDispatch();
  const root = useSelector(state => state.fileSystem.root);
  const folders = getFolders(root);

  return (
    <Formik
      initialValues={{ name: '', parentId: '', type: 'folder' }}
      validationSchema={createSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addItem(values));
        resetForm();
        onClose();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-section">
          <label>Name</label>
          <Field name="name" placeholder="Name Of The New Folder" />
          <ErrorMessage name="name" component="div" className="error" />

          <label>Type</label>
          <Field as="select" name="type">
            <option value="folder">Folder</option>
            <option value="file">File</option>
          </Field>

          <label>Parent Folder</label>
          <Field as="select" name="parentId">
            <option value="" disabled>-- Please select a folder --</option>
            {folders.map(f => (
              <option key={f.id} value={f.id}>{f.name} ({f.id})</option>
            ))}
          </Field>
          <ErrorMessage name="parentId" component="div" className="error" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : 'Create'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormCreateFile;