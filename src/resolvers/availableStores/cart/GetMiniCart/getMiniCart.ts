import { ClientProps } from 'src';
import { GetMiniCartQueryVariables } from '@schema';

const GetMiniCart = (clientProps: ClientProps) => (resolverProps: GetMiniCartQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetMiniCart;
