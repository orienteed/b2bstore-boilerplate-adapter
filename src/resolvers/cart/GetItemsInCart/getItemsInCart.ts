import { ClientProps } from 'src';
import { GetItemsInCartQueryVariables } from '@schema';

const GetItemsInCart = (clientProps: ClientProps) => (resolverProps: GetItemsInCartQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetItemsInCart;
