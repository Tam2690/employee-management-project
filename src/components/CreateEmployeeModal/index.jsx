import React, { useState } from 'react';
import { CreateEmployeeModalStyled, ErrorFieldStyled } from './styles';
import Title from '../Title';
import { useFormik } from 'formik';
import { createEmployee } from 'src/api/employees';
import { showToast } from 'src/hoc/withShowNotification';
import { CreateEmployeeSchema } from 'src/schemas/createEmployee.schemas';
import SelectInput from '../SelectInput';

const CreateEmployeeModal = ({ setIsShowModal, setEmployeesData }) => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const formik = useFormik({
    initialValues: {
      role: '',
      fullName: '',
      email: '',
      address: '',
      avatarSrc: '',
    },
    validationSchema: CreateEmployeeSchema,

    onSubmit: async (values) => {
      const response = await createEmployee(values);
      setEmployeesData(response.data);
      setIsShowModal(false);
      showToast('Create new employee successfully!');
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;

  console.log(handleBlur);

  const handleClickCancel = () => {
    setIsShowModal(false);
  };

  const handleErrorField = (field) => {
    return errors[field] && touched[field] ? (
      <ErrorFieldStyled>{errors[field]}</ErrorFieldStyled>
    ) : (
      <div style={{ marginTop: '31px' }}></div>
    );
  };

  const handleClickRoleField = () => {
    setIsShowDropdown(true);
  };

  const handleBlurRoleField = () => {
    setIsShowDropdown(false);
  };

  return (
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
          onBlur={handleBlur && handleBlurRoleField}
          className={errors['role'] && touched['role'] ? 'error-field' : ''}
          onClick={handleClickRoleField}
          readOnly
        />
        {isShowDropdown && <SelectInput />}
        {handleErrorField('role')}
        <input
          type="search"
          name="fullName"
          placeholder="Full Name*"
          autoComplete="off"
          onChange={handleChange}
          value={values.fullName}
          onBlur={handleBlur}
          className={
            errors['fullName'] && touched['fullName'] ? 'error-field' : ''
          }
        />
        {handleErrorField('fullName')}
        <input
          type="search"
          name="email"
          placeholder="Email*"
          autoComplete="off"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={errors['email'] && touched['email'] ? 'error-field' : ''}
        />
        {handleErrorField('email')}
        <input
          type="search"
          name="address"
          placeholder="Address*"
          autoComplete="off"
          onChange={handleChange}
          value={values.address}
          onBlur={handleBlur}
          className={
            errors['address'] && touched['address'] ? 'error-field' : ''
          }
        />
        {handleErrorField('address')}
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
          <button onClick={handleClickCancel}>Cancel</button>
        </div>
      </form>
    </CreateEmployeeModalStyled>
  );
};

export default CreateEmployeeModal;
