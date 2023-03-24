import { ClientProps } from 'src';
import { AddConfigurableProductToCartMutationVariables } from '@schema';

const AddConfigurableProductToCart = (clientProps: ClientProps) => (resolverProps: AddConfigurableProductToCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default AddConfigurableProductToCart;
