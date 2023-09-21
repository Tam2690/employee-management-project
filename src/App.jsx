import { useEffect, useState } from 'react';
import { getEmployeesList } from './api/employees';
import ManagementEmployees from './components/ManagementEmployess';

function App() {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const data = await getEmployeesList();
    //   setEmployeesData(data);
    // };
    // fetchData();

    getEmployeesList().then((data) => setEmployeesData(data));
  }, []);

  return (
    <>
      {/* <h1>Employees List</h1>
      {employeesData?.length ? <> {JSON.stringify(employeesData)} </> : <p>No data</p>} */}

      <ManagementEmployees test="team-fe" className="hello-world" />
    </>
  );
}

export default App;
