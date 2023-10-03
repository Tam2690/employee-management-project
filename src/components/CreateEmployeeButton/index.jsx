import { useState } from 'react';
import CreateEmployeeButtonStyled from './styles';
import { createPortal } from 'react-dom';
import CreateEmployeeModal from '../CreateEmployeeModal';

const CreateEmployeeButton = ({ buttonText, buttonIcon, setEmployeesData }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClick = () => {
    setIsShowModal(true);
  };

  return (
    <>
      <CreateEmployeeButtonStyled onClick={handleClick}>
        {buttonIcon} {buttonText}
      </CreateEmployeeButtonStyled>
      {isShowModal &&
        createPortal(
          <div className="blur">
            <CreateEmployeeModal
              setIsShowModal={setIsShowModal}
              setEmployeesData={setEmployeesData}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default CreateEmployeeButton;
