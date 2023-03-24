import { ClientProps } from 'src';
import { GetProductFiltersBySearchQueryVariables } from '@schema';

const GetProductFiltersBySearch = (clientProps: ClientProps) => (resolverProps: GetProductFiltersBySearchQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetProductFiltersBySearch;
