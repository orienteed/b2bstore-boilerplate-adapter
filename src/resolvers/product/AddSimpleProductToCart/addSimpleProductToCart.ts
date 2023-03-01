import { ClientProps } from 'src';
import { AddSimpleProductToCartMutationVariables } from '@schema';

const AddSimpleProductToCart = (clientProps: ClientProps) => (resolverProps: AddSimpleProductToCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default AddSimpleProductToCart;
