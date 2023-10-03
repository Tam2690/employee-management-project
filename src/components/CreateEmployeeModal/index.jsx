import React from 'react';
import CreateEmployeeModalStyled from './styles';
import Title from '../Title';
import { useFormik } from 'formik';
import { createEmployee } from 'src/api/employees';
import { showToast } from 'src/hoc/withShowNotification';

const CreateEmployeeModal = ({ setIsShowModal, setEmployeesData }) => {
  const formik = useFormik({
    initialValues: {
      role: '',
      fullName: '',
      email: '',
      address: '',
      avatarSrc: '',
    },
    onSubmit: async (values) => {
      const response = await createEmployee(values);
      setEmployeesData(response.data);
      setIsShowModal(false);
      showToast('Create new employee successfully!');
    },
  });

  const { handleSubmit, handleChange, values } = formik;

  return (
    <>
      <CreateEmployeeModalStyled>
        <Title
          content="Create New Employee"
          customStyles={{ textAlign: 'center' }}
        />
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="role"
            placeholder="Role*"
            autoComplete="off"
            autoFocus
            onChange={handleChange}
            value={values.role}
          />
          <input
            type="search"
            name="fullName"
            placeholder="Full Name*"
            autoComplete="off"
            onChange={handleChange}
            value={values.fullName}
          />
          <input
            type="search"
            name="email"
            placeholder="Email*"
            autoComplete="off"
            onChange={handleChange}
            value={values.email}
          />
          <input
            type="search"
            name="address"
            placeholder="Address*"
            autoComplete="off"
            onChange={handleChange}
            value={values.address}
          />
          <input
            type="search"
            name="avatarSrc"
            placeholder="Avatar URL"
            autoComplete="off"
            onChange={handleChange}
            value={values.avatarSrc}
          />
          <div className="action-buttons">
            <button type="submit">Create</button>
            <button onClick={() => setIsShowModal(false)}>Cancel</button>
          </div>
        </form>
      </CreateEmployeeModalStyled>
    </>
  );
};

export default CreateEmployeeModal;
