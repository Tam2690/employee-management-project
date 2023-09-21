import request from '../utils/request';

const ENTITY = 'employees';

export const getEmployeesList = async () => {
  const response = await request.get(ENTITY);
  return response.data;
};

const createEmployee = async () => {};

const deleteEmployee = async () => {};

const updateEmployee = async () => {};
