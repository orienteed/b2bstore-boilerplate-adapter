import { ClientProps } from 'src';
import { CreateWishlistMutationVariables } from '@schema';

const CreateWishlist = (clientProps: ClientProps) => (resolverProps: CreateWishlistMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default CreateWishlist;
