import { ClientProps } from 'src';
import { GetSavedCartsQueryVariables } from '@schema';

const GetSavedCarts = (clientProps: ClientProps) => (resolverProps: GetSavedCartsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetSavedCarts;
