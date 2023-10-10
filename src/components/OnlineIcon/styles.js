import styled from 'styled-components';

const OnlineIconStyled = styled.div`
  width: 20px;
  height: 20px;
  background-color: #32cd32;
  border-radius: 50%;
  position: absolute;
  left: 100px;
  top: 100px;
  z-index: 1;

  @media (max-width: 500px) {
    left: 80px;
    top: 85px;
  }
`;

export default OnlineIconStyled;
