import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customToast = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export const showToast = (message) => {
  toast(message, customToast);
};

const withShowNotification = (Component) => (props) => {
  return (
    <>
      <Component {...props} />
    </>
  );
};

export default withShowNotification;
