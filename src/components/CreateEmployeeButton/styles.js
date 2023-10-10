import styled from "styled-components";

export const CreateEmployeeButtonStyled = styled.button`
  background: #00b894;
  color: white;
  border-radius: 8px;
  border: none;
  outline: none;
  padding: 10px 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: teal;
    transform: scale(0.95);
  }
`;

export default CreateEmployeeButtonStyled;
