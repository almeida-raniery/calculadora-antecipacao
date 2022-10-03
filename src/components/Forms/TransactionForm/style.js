import styled from "styled-components";
import {Form, Field} from "formik";

const notShowingResults = props => props.isShowingResults ? "none" : "flex"

export const FormWraper = styled.div`
  display:${notShowingResults};
  background-color: white;
  border-radius: 2px;
`
export const Title = styled.h1`
  text-align: center;
`
export const StyledForm = styled(Form)`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.8em 2em;
  max-width: 60%;
  margin: auto;
`
export const StyledField = styled(Field)`
  padding: 0.2em;
  border-radius: 5px;
  border: 1px solid lightgray;
`
export const StyledLabel = styled.label`
  margin: 0.6em 0;
  align-self: flex-start;
`

export const SubmitButton = styled.button`
  padding: 0.8em 2em;
  background-color: royalblue;
  color: white;
  margin: 1em;
  border: none;
  font-size: 1em;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
`