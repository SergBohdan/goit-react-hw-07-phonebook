import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 15px;
  border: 3px solid black;
  padding: 10px;
  background-color: beige;
  margin-top: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ListBtn = styled.button`
  border-radius: 8px;
  background-color: yellow;
  color: brown;
`;

export const ClearBtn = styled.button`
  border-radius: 8px;
  background-color: #eb4034;
  color: #ffffff;
`;