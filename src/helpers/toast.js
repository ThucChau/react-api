import React from 'react';
import { toast } from 'react-toastify';

const showToast = (message, type) => {
  return toast[type](
    <>
      {type === 'error' ? (
        <>
          <i className='fas fa-exclamation-circle'></i>
        </>
      ) : (
        <i className='fas fa-check'></i>
      )}
      &nbsp;{message}
    </>,

    {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

export default showToast;