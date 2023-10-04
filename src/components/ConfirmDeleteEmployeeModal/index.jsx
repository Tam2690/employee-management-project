import { deleteEmployee } from 'src/api/employees';
import Title from '../Title';
import ConfirmDeleteEmployeeModalStyled from './styles';
import { showToast } from 'src/hoc/withShowNotification';

const ConfirmDeleteEmployeeModal = ({
  setIsShowConfirmDeleteModal,
  employeeId,
  setEmployeesData,
  employeesData,
}) => {
  const handleClickDelete = async () => {
    const response = await deleteEmployee(employeeId);
    setEmployeesData(response.data);
    showToast('Delete employee successfully!');
  };

  const handleClickCancel = () => {
    setIsShowConfirmDeleteModal(false);
  };

  const filteredEmployee = employeesData.filter(
    (employee) => employee.id === employeeId
  );

  return (
    <div className="blur">
      <ConfirmDeleteEmployeeModalStyled>
        <Title content="Confirm Delete Employee" />
        <p>Are you sure you want to delete employee:</p>
        <h3>{filteredEmployee[0].fullName}</h3>
        <div className="action-buttons">
          <button onClick={() => handleClickDelete()}>Delete</button>
          <button onClick={handleClickCancel}>Cancel</button>
        </div>
      </ConfirmDeleteEmployeeModalStyled>
    </div>
  );
};

export default ConfirmDeleteEmployeeModal;
