import styled from 'styled-components';

export const List = styled.ul`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;

export const ContactListLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-position: inside;
  width: 450px;
  padding: 8px;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const Button = styled.button`
  margin-left: 18px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background: blue;
  }
`;
