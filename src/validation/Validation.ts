import { FoodProps } from "../context/Context";

//I need optional keys inside this object
type ValidationProps = {
  name: string
  url: string
  price: string
  description: string
  ingredients: string
}

//Custom form validation
export const validate = (values: FoodProps) => {
  //Or it can be const errors = <ValidationProps>{}
  const errors = {} as ValidationProps;

  if (!values.name) {
    errors.name = "Name is required!";
  }

  if (!values.url) {
    errors.url = "URL is required!";
  }

  if (!values.description) {
    errors.description = "Description is required!";
  }

  if (!values.ingredients) {
    errors.ingredients = "Ingredients is required!";
  }

  if (!values.price) {
    errors.price = "Price is required!";
  }

  return errors;
};