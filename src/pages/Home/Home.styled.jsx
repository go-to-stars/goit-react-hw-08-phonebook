import styled from '@emotion/styled';
import { ReactComponent as GreetingsPicture } from '../../img/greetings.svg';

export const Img = styled(GreetingsPicture)`
  width: 200px;
  height: 200px;

  fill: currentColor;

  @media (max-width: 1023.98px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 767.98px) {
    width: 100px;
    height: 100px;
  }
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 70vw;
  margin: 10vh auto;
  padding: 25px;

  text-align: center;
  background-color: inherit;

  @media (max-width: 1023.98px) {
    padding: 20px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    padding: 15px;

    border-radius: 6px;
  }
`;

export const TitleHome = styled.h1`
  margin-bottom: 15px;

  font-size: 28px;
  color: inherit;

  @media (max-width: 1023.98px) {
    margin-bottom: 22px;
    font-size: 24px;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;

export const TextHome = styled.p`
  margin: 0;

  font-size: 24px;
  color: inherit;

  @media (max-width: 1023.98px) {
    font-size: 20px;
  }

  @media (max-width: 767.98px) {
    font-size: 16px;
  }
`;

export const ErrorTextHome = styled.p`
  margin: 0;

  font-size: 14px;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;
