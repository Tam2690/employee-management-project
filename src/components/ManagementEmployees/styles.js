import styled from 'styled-components';

const ManagementEmployeesStyle = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  .action-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 0;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 30px;
    margin-top: 50px;
  }
`;

export default ManagementEmployeesStyle;
