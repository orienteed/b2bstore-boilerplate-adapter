import { ClientProps } from 'src';
import { GetProductsForPagebuilderByUrlKeyQueryVariables } from '@schema';

const GetProductsForPagebuilderByUrlKey =
    (clientProps: ClientProps) => (resolverProps: GetProductsForPagebuilderByUrlKeyQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetProductsForPagebuilderByUrlKey;
