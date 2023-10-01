import styled from 'styled-components';

const EmployeesListStyled = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  margin-top: 30px;
  position: relative;
  min-height: 200px;
  max-height: 72vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(43, 203, 186, 1);
    border-radius: 5px;
  }
`;

export default EmployeesListStyled;
