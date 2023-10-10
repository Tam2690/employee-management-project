import styled from 'styled-components';

const EmployeeCardStyled = styled.div`
  padding: 25px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;

  &:hover {
    transform: scale(0.98);
    transition: all 0.3s;
  }

  .main-container {
    display: flex;
  }

  .employee-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;

    img {
      padding: 3px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-position: center;
      object-fit: cover;
      border: 1px solid #00808057;
      &:hover {
        transform: scale(1.3);
        transition: all 0.4s;
      }
    }
  }

  .employee-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;

    .action-button {
      padding: 7px 25px;
      border: none;
      outline: none;
      border-radius: 8px;

      &:last-child {
        margin-left: 10px;
      }

      &:hover {
        cursor: pointer;
        transform: scale(0.9);
        transition: all 0.3s;
      }

      &.edit-button:hover {
        background: #74b9ff;
        box-shadow: 5px 5px 7px #74b9ffad;
      }

      &.delete-button:hover {
        background: #e17055;
        box-shadow: 5px 5px 7px #e17055ad;
      }
    }
  }

  .employee-info {
    span {
      font-weight: bold;
    }

    p:nth-child(3) {
      margin-top: 8px;
    }
  }

  @media (max-width: 500px) {
    width: 90%;

    .employee-avatar {
      width: 80px;
      height: 80px;
    }
  }
`;
export default EmployeeCardStyled;
