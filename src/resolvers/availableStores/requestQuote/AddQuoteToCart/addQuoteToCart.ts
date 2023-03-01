import { ClientProps } from 'src';
import { AddQuoteToCartMutationVariables } from '@schema';

const AddQuoteToCart = (clientProps: ClientProps) => (resolverProps: AddQuoteToCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default AddQuoteToCart;
