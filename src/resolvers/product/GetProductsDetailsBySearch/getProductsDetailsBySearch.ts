import { ClientProps } from 'src';
import { GetProductsDetailsBySearchQueryVariables } from '@schema';

const GetProductsDetailsBySearch = (clientProps: ClientProps) => (resolverProps: GetProductsDetailsBySearchQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetProductsDetailsBySearch;
