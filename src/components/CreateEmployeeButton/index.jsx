import CreateEmployeeButtonStyled from './styles';

const CreateEmployeeButton = ({ buttonText, buttonIcon }) => {
  const handleClick = () => {
    console.log('handleClick');
  };

  return (
    <CreateEmployeeButtonStyled onClick={handleClick}>
      {buttonIcon} {buttonText}
    </CreateEmployeeButtonStyled>
  );
};

export default CreateEmployeeButton;
