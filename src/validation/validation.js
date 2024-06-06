import * as yup from "yup";
export const categorySchema = yup.object({
  name: yup
    .string()
    .required("This Field is required")
    .min(3, "This field must be at least 3 characters"),
  description: yup.string().required("This Field is required"),
});

export const userSchema = yup.object({
  username: yup
    .string()
    .required("This field is required")
    .min(3, "Your name need to be at least 3 letters"),
  age: yup
    .number()
    .required("This field is required")
    .min(18, "You should be at least 18 yrs"),
  email: yup.string().required("This field is required").email(),
  password: yup
    .string()
    .required("This field is required")
    .min(6, "Password need to be at least 6 letter"),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Password doesn't match"),
});

export const productSchema = yup.object({
  name: yup.string().required("This field is required"),
  category: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
});
