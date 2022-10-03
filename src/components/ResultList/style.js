import styled from "styled-components";

const showingResults = props => props.isShowingResults ? "flex" : "none"

export const ListContainer = styled.div`
  display: ${showingResults};
  background-color: white;
  padding: 4em;
  border-radius: 2px;
  flex-direction: column;
  align-items: center;
`

export const ReturnButton = styled.button`
  background-color: transparent;
  border: none;
  color: royalblue;
  text-decoration: underline;
  font-size: 1.2em;
  cursor: pointer;
`