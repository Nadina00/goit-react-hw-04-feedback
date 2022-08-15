import styled from "styled-components"

export const Item = styled.ul`
  display: flex;
`;  
export const List = styled.li`
    list-style: none;
  `;
  export const Btn = styled.button`
  color: palevioletred;
  font-size: 30px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid palevioletred;
  border-radius: 3px;

  :hover {
    color: red;
    font-size: 40px;

  }
  `;