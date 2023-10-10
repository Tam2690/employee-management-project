import * as yup from 'yup';

export const CreateEmployeeSchema = yup.object().shape({
  role: yup.string().required('Role is required!'),
  fullName: yup
    .string()
    .required('Full name is required!')
    .min(4, 'Full name must be at least 4 characters')
    .max(26, 'Full name too long')
    .matches(/^([^0-9]*)$/, 'Only alphabetic characters allowed'),
  email: yup
    .string()
    .required('Email is required!')
    .email('Invalid email address'),
  address: yup
    .string()
    .required('Address is required!')
    .min(4, 'Address must be at least 4 characters'),
});
