import withShowNotification from '../../hoc/withShowNotification';
import { showToast } from '../../hoc/withShowNotification';
import { ToastContainer, toast } from 'react-toastify';
import ManagementEmployeesStyle from './styles';
import Title from '../Title';
import CreateEmployeeButton from '../CreateEmployeeButton';
import { FaPlus } from 'react-icons/fa6';
// import EmployeeCard from '../EmployeeCard';
import EmployeesList from '../EmployeesList';
import { useEffect, useState } from 'react';
import { getEmployeesList } from 'src/api/employees';

const ManagementEmployees = () => {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    getEmployeesList().then((data) => setEmployeesData(data));
  }, []);

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
      <EmployeesList
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
      <ToastContainer />
    </ManagementEmployeesStyle>
  );
};

export default withShowNotification(ManagementEmployees);
