import { ClientProps } from 'src';
import { GetWishlistProductsQueryVariables } from '@schema';

const GetWishlistProducts = (clientProps: ClientProps) => (resolverProps: GetWishlistProductsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetWishlistProducts;
