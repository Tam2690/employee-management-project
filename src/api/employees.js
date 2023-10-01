import request from '../utils/request';

const ENTITY = 'employees';

export const getEmployeesList = async () => {
  const response = await request.get(ENTITY);
  return response.data;
};

const createEmployee = async () => {};

export const deleteEmployee = async (employeeId) => {
  const response = await request.delete(`${ENTITY}/${employeeId}`);
  const updatedResponse = await getEmployeesList();
  response.data = updatedResponse;
  return response;
};

const updateEmployee = async () => {};
