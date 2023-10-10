import styled from "styled-components";

export const CreateEmployeeModalStyled = styled.div`
  background: white;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 30px;
  z-index: 2;

  & .form {
    display: flex;
    flex-direction: column;

    & > input {
      margin-top: 12px;
      padding: 10px 15px;
      border-radius: 10px;
      outline: none;
      border: 1px solid #80808085;
      position: relative;
      z-index: 1;
      background: none;

      &:focus {
        border: 1px solid #36454f;
      }
    }

    & > .error-field {
      border: 2px solid red;

      &::placeholder {
        color: red;
      }
    }
  }

  .action-buttons {
    margin-top: 35px;
    display: flex;
    justify-content: flex-end;

    & > button {
      padding: 7px 15px;
      border-radius: 8px;
      border: none;

      &:hover {
        cursor: pointer;
        transform: scale(0.9);
        transition: all 0.3s;
      }
    }

    & > button:first-child {
      background-color: rgba(225, 112, 85, 1);
      color: white;

      &:hover {
        box-shadow: 5px 5px 7px rgba(225 112 85 / 59%);
      }
    }

    & > button:last-child {
      margin-left: 10px;

      &:hover {
        box-shadow: 5px 5px 7px #8080808c;
      }
    }
  }

  @media (max-width: 560px) {
    width: 90%;
  }
`;

export const ErrorFieldStyled = styled.p`
  color: red;
  margin-top: 5px;
  padding: 0 10px;
`;
