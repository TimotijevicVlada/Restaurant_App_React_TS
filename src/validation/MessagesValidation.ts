import { MessagesProps } from "../types/Types";

//I need optional keys inside this object
type ValidationProps = {
    title: string
    address: string
    phone: string | number
    message: string
}

//Custom form validation
export const validate = (values: MessagesProps) => {
  //Or it can be const errors = <ValidationProps>{}
  const errors = {} as ValidationProps;

  if (!values.title) {
    errors.title = "Title is required!";
  }

  if (!values.address) {
    errors.address = "Address is required!";
  }

  if (!values.phone) {
    errors.phone = "Phone is required!";
  }

  if (!values.message) {
    errors.message = "Message is required!";
  }

  return errors;
};