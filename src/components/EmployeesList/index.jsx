import EmployeesListStyled from './styles';
import EmployeeCard from '../EmployeeCard';
import NoDataNotification from '../NoDataNotification';
import PropTypes from 'prop-types';

const EmployeesList = ({ employeesData, setEmployeesData }) => {
  return (
    <EmployeesListStyled>
      {employeesData.length ? (
        employeesData?.map((employee) => (
          <EmployeeCard
            key={employee.id}
            data={employee}
            setEmployeesData={setEmployeesData}
            employeesData={employeesData}
          />
        ))
      ) : (
        <NoDataNotification />
      )}
    </EmployeesListStyled>
  );
};

EmployeesList.propTypes = {
  employeesData: PropTypes.array,
  setEmployeesData: PropTypes.func,
};

export default EmployeesList;
