import { ClientProps } from 'src';
import { AddWishlistProductToCartMutationVariables } from '@schema';

const AddWishlistProductToCart = (clientProps: ClientProps) => (resolverProps: AddWishlistProductToCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default AddWishlistProductToCart;
