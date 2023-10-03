import { useFormik } from 'formik';
import Title from '../Title';
import EditEmployeeModalStyled from './styles';
import { updateEmployee } from 'src/api/employees';
import { showToast } from 'src/hoc/withShowNotification';

const EditEmployeeModal = ({ setIsShowModal, dataForm, setEmployeesData }) => {
  const { role, fullName, email, address, avatarSrc, id } = dataForm[0];

  const formik = useFormik({
    initialValues: {
      role: role,
      fullName: fullName,
      email: email,
      address: address,
      avatarSrc: avatarSrc,
      id: id,
    },
    onSubmit: async ({ id, ...data }) => {
      const response = await updateEmployee(id, data);
      setEmployeesData(response.data);
      setIsShowModal(false);
      showToast('Update employee successfully!');
    },
  });

  const { handleSubmit, handleChange, values } = formik;

  return (
    <div className="blur">
      <EditEmployeeModalStyled>
        <Title content="Edit Employee" customStyles={{ textAlign: 'center' }} />
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
            <button type="submit">Update</button>
            <button
              onClick={() => {
                setIsShowModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </EditEmployeeModalStyled>
    </div>
  );
};

export default EditEmployeeModal;
