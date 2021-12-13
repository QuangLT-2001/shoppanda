import styled from "styled-components";
export const ChangeColorItems = styled.li`
  width: calc((100% - 5.5rem) / 5);
  padding: 1rem 0;
  border: 1px solid;
  margin: .55rem;
  background: ${props => props.nameBackground};
  cursor: pointer;
  &.active-color {
    border: 2px solid red;
  }
`