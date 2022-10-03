import { Formik } from "formik";
import transactionSchema from "../../../schemas/transactions.schema";
import api from "../../../services/api";
import formHandler from "./formHandler";
import { FormWraper } from "./style";

const initialData = {
  amount: "15000",
  installments: "3",
  mdr: "4",
};

function TransactionForm({ setIsShowingResults, isShowingResults, setIsCalculating, setResults }) {
  async function submitForm(data) {
    setResults({})
    setIsShowingResults(true);
    setIsCalculating(true)

    const resp = await api.post("", data)

    setIsCalculating(false)
    setResults(resp.data)
  }

  return (
    <FormWraper isShowingResults={isShowingResults} >
      <Formik
        onSubmit={submitForm}
        validationSchema={transactionSchema}
        initialValues={initialData}
      >
        {formHandler}
      </Formik>
    </FormWraper>
  );
}

export default TransactionForm;
