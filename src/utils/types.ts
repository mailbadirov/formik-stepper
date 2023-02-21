import { FormikErrors, FormikTouched } from "formik";

export interface IFormState {
  firstName: string;
  lastName: string;
  age: number;
  privacyPolicy: boolean;
  rate: number;
  gender: string;
  description: string;
  like: boolean;
}

export interface IFormProps {
  values: IFormState;
  errors: FormikErrors<IFormState>;
  touched: FormikTouched<IFormState>;
  handleChange: any;
  handleBlur: any;
}
