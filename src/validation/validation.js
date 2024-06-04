import * as yup from "yup";
export const categorySchema = yup.object({
  name: yup
    .string()
    .required("This Field is required")
    .min(3, "This field must be at least 3 characters"),
  description: yup.string().required("This Field is required"),
});
