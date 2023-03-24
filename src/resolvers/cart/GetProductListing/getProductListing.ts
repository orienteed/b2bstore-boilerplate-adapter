import { ClientProps } from 'src';
import { GetProductListingQueryVariables } from '@schema';

const GetProductListing = (clientProps: ClientProps) => (resolverProps: GetProductListingQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetProductListing;
