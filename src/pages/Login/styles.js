import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f5;

  > div {
    margin: 0 auto;
    background-color: #ffffff;
    border: 1px;
    border-color: #e8eced;

    > img {
      margin: 0 auto 24px;
      width: 40%;
      display: flex;
      align-content: center;

      @media only screen and (max-width: 500px) {
        & {
          width: 100%;
        }
      }
    }

    > form > button.btn-send {
      margin-top: 20px;
      background-color: #f6a532;
      color: #ffffff;
    }
  }
`;
