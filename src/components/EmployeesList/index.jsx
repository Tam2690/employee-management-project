import React from 'react';
import EmployeesListStyled from './styles';
import EmployeeCard from '../EmployeeCard';
import NoDataNotification from '../NoDataNotification';

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

export default EmployeesList;
