import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    email: yup.string().required("Required field!").email(),
    password: yup
      .string()
      .required("Required field")
      .min(6, "Min 6 symbols")
      .matches(/^[0-9a-zA-Z]{5,}$/, "Password incorrect"),
  })
  .required();
