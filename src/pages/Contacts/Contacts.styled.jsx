import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 60vw;
  margin: 20px auto 0;
  padding: 15px;

  background-color: rgb(231, 236, 242);
  border-radius: 10px;

  @media (max-width: 1023.98px) {
    max-width: 70vw;
    margin: 15px auto 0;
    padding: 10px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    max-width: 80vw;
    margin: 10px auto 0;
    padding: 5px;

    border-radius: 6px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);

  max-width: 56vw;
  margin: 20px auto;
  padding: 15px;
  
  background-color: inherit;  

  @media (max-width: 1023.98px) {
    max-width: 64vw;
    margin: 15px auto;
    padding: 10px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    max-width: 72vw;
    margin: 10px auto;
    padding: 5px;

    border-radius: 6px;
  }
`;

export const TopTitle = styled.h1`
  padding: 12px 0;

  font-size: 24px;
  text-align: center;

  @media (max-width: 1023.98px) {
    padding: 10px 0;

    font-size: 20px;
  }

  @media (max-width: 767.98px) {
    padding: 8px 0;

    font-size: 16px;
  }
`;

export const Title = styled.h2`
  padding: 12px 0;

  font-size: 24px;
  text-align: center;

  @media (max-width: 1023.98px) {
    padding: 10px 0;

    font-size: 20px;
  }

  @media (max-width: 767.98px) {
    padding: 8px 0;

    font-size: 16px;
  }
  `;
