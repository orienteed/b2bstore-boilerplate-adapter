import { ClientProps } from 'src';
import { GetSimpleProductQueryVariables } from '@schema';

const GetSimpleProduct = (clientProps: ClientProps) => (resolverProps: GetSimpleProductQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetSimpleProduct;
