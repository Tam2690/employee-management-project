import withShowNotification from '../../hoc/withShowNotification';
import { showToast } from '../../hoc/withShowNotification';
import { ToastContainer, toast } from 'react-toastify';
import ManagementEmployeesStyle from './styles';
import Title from '../Title';
import CreateEmployeeButton from '../CreateEmployeeButton';
import { FaPlus } from 'react-icons/fa6';
import EmployeeCard from '../EmployeeCard';

const ManagementEmployees = () => {
  const customStyles = {
    textAlign: 'center',
  };

  return (
    <ManagementEmployeesStyle>
      <Title content="Data Centre Of Employee" customStyles={customStyles} />
      <div className="action-bar">
        <CreateEmployeeButton
          buttonText=" New Employee"
          buttonIcon={<FaPlus />}
        />
      </div>
      <div className="list">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>

      <ToastContainer />
    </ManagementEmployeesStyle>
  );
};

export default withShowNotification(ManagementEmployees);
