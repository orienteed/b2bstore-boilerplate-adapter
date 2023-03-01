import { ClientProps } from 'src';
import { AddProductToCartMutationVariables } from '@schema';

const AddProductToCart = (clientProps: ClientProps) => (resolverProps: AddProductToCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default AddProductToCart;
