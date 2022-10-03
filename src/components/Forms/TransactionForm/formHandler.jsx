import { Field } from "formik";
import { StyledField, StyledForm, StyledLabel, SubmitButton, Title } from "./style";

function formHandler() {
  return(
    <StyledForm>
      <Title>Simule sua Antecipação!</Title>
      <StyledLabel>Informe o valor da venda:</StyledLabel>
      <StyledField type="number" name="amount"/>
      <StyledLabel>Em quantas parcelas?</StyledLabel>
      <StyledField type="number" name="installments"/>
      <small>Máximo de 12 parcelas</small>
      <StyledLabel>Informe o percentual de MDR:</StyledLabel>
      <StyledField type="number" name="mdr"/>
      <SubmitButton type="submit">Calcular</SubmitButton>
    </StyledForm>
  )
}

export default formHandler