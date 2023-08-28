import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  margin-top: 16px;
  gap: 12px;

  list-style: inside;

  @media (max-width: 1023.98px) {
    margin-top: 12px;
    gap: 10px;
  }

  @media (max-width: 767.98px) {
    margin-top: 8px;
    gap: 4px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 1023.98px) {
    gap: 10px;
  }

  @media (max-width: 767.98px) {
    gap: 5px;
  }
`;
