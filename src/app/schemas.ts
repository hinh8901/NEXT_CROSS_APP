import * as yup from "yup"

export const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
  remember: yup.bool().required(),
})
