import styled from 'styled-components';

export const Main = styled.div`
  background-color: #f2f4f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  header.header-bar {
    background: #f6a532;
    margin-bottom: 14px;
  }

  div.header-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  button.btn-logout {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: #ffffff;
  }

  main.container {
    width: 100%;
    background: silver;
  }

  div.box-container {
    background-color: #ffffff;
    border: 1px;
    border-color: #e8eced;
  }

  div.chart-container {
    height: 100%;
  }
`;
