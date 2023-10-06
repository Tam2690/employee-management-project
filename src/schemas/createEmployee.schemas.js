import * as yup from 'yup';

export const CreateEmployeeSchema = yup.object().shape({
  role: yup.string().required('Role is required!'),
  fullName: yup.string().required('Full name is required!'),
  email: yup
    .string()
    .required('Email is required!')
    .email('Invalid email address'),
  address: yup.string().required('Address is required!'),
});
