import { ClientProps } from 'src';
import { RemoveProductsFromWishlistMutationVariables } from '@schema';

const RemoveProductsFromWishlist = (clientProps: ClientProps) => (resolverProps: RemoveProductsFromWishlistMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default RemoveProductsFromWishlist;
