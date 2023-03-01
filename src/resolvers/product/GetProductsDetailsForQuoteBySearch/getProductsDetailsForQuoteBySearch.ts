import { ClientProps } from 'src';
import { GetProductsDetailsForQuoteBySearchQueryVariables } from '@schema';

const GetProductsDetailsForQuoteBySearch =
    (clientProps: ClientProps) => (resolverProps: GetProductsDetailsForQuoteBySearchQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetProductsDetailsForQuoteBySearch;
