import { AddConfigurableProductToCartMutation } from "src/schema";

export const addItemToCartParser = (
  data: any
): AddConfigurableProductToCartMutation => {
  // Your parser logic here
  return data;
};
