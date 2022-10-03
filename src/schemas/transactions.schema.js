import * as yup from "yup"

const transactionSchema = yup.object().shape({
  amount: yup.number().integer().default(1000).max(999999).min(100).required(),
  installments: yup.number().integer().default(1).min(1).max(12).required(),
  mdr: yup.number().default(3).positive().max(10).required()
})

export default transactionSchema;