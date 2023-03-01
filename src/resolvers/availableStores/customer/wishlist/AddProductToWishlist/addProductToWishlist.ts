import { ClientProps } from 'src';
import { AddProductToWishlistMutationVariables } from '@schema';

const AddProductToWishlist = (clientProps: ClientProps) => (resolverProps: AddProductToWishlistMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default AddProductToWishlist;
