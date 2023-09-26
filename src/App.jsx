import { useState, useEffect } from 'react';
import './App.css';
import { getEmployeesList } from './api/employees';
import ManagementEmployees from './components/ManagementEmployees';

function App() {
  const [employeesList, setEmployeesList] = useState([]);

  useEffect(() => {
    getEmployeesList().then((data) => setEmployeesList(data));
  }, []);

  return (
    <>
      <ManagementEmployees />
    </>
  );
}

export default App;
