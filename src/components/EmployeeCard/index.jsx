import EmployeeCardStyled from './styles';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { deleteEmployee, getEmployeesList } from 'src/api/employees';
import { showToast } from 'src/hoc/withShowNotification';
import OnlineIcon from '../OnlineIcon';
import EditEmployeeModal from '../EditEmployeeModal';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const EmployeeCard = ({ data, setEmployeesData }) => {
  const { address, avatarSrc, email, fullName, id, isOnline, role } = data;

  const [isShowModal, setIsShowModal] = useState(false);

  const [dataForm, setDataForm] = useState([]);

  const handleEditEmployee = async (id) => {
    const response = await getEmployeesList();
    const dataForm = response.filter((employee) => employee.id === id);
    setIsShowModal(true);
    setDataForm(dataForm);
  };

  const handleDeleteEmployee = async (id) => {
    const response = await deleteEmployee(id);
    setEmployeesData(response.data);
    showToast('Delete employee successfully!');
  };

  return (
    <EmployeeCardStyled>
      {isOnline === true ? <OnlineIcon /> : <p></p>}
      <div className="main-container">
        <section className="employee-avatar">
          <img src={avatarSrc} alt="avatar.png" />
        </section>
        <section className="employee-info">
          <span>{fullName}</span>
          <p>{role}</p>
          <p>{email}</p>
          <p>{address}</p>
        </section>
      </div>
      <section className="employee-actions">
        <button
          className="action-button edit-button"
          onClick={() => handleEditEmployee(id)}
        >
          <FaPenToSquare />
        </button>
        {isShowModal &&
          createPortal(
            <EditEmployeeModal
              setIsShowModal={setIsShowModal}
              dataForm={dataForm}
              setEmployeesData={setEmployeesData}
            />,
            document.body
          )}
        <button
          className="action-button delete-button"
          onClick={() => handleDeleteEmployee(id)}
        >
          <FaTrashCan />
        </button>
      </section>
    </EmployeeCardStyled>
  );
};

export default EmployeeCard;
