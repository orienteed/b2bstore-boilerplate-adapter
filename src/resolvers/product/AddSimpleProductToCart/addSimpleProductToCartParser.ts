import { AddSimpleProductToCartMutation } from "src/schema";

export const addItemToCartParser = (
  data: any
): AddSimpleProductToCartMutation => {
  // Your parser logic here
  return data;
};
