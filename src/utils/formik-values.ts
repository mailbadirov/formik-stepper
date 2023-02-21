import * as Yup from "yup";

import { IFormState } from "./types";

const initialValues: IFormState = {
  firstName: "",
  lastName: "",
  age: 35,
  privacyPolicy: false,
  rate: 30,
  gender: "",
  description: "",
  like: false,
};

const validationSchema = () =>
  Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Three letters or longer.")
      .matches(/^[aA-zZ\s]+$/, "Must only contain latin letters.")
      .max(25, "Less than 25 letters.")
      .required("Write your name."),
    lastName: Yup.string()
      .min(3, "Three letters or longer")
      .matches(/^[aA-zZ\s]+$/, "Must only contain latin letters.")
      .max(25, "Less than 25 letters.")
      .required("Write your last name."),
    age: Yup.number().min(19, "You need to be older than 18 to continue"),
    privacyPolicy: Yup.boolean().oneOf(
      [true],
      "This field must be checked"
    ),
    rate: Yup.number().min(
      100,
      "You have to rate us with maximum value to continue"
    ),
    gender: Yup.string()
      .oneOf(["female"], "You have to be a woman to continue... Sorry.")
      .required("This field must be selected"),
    description: Yup.string()
      .min(10, "Ten letters or longer.")
      .max(1000, "Less than 1000 letters.")
      .required("Describe yourself."),
    like: Yup.boolean().oneOf(
      [true],
      "You have to like us to continue... Sorry."
    ),
  });

export { initialValues, validationSchema };
