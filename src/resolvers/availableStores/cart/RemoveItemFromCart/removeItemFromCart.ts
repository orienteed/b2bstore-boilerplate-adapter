import { ClientProps } from 'src';
import { RemoveItemFromCartMutationVariables } from '@schema';

const RemoveItemFromCart = (clientProps: ClientProps) => (resolverProps: RemoveItemFromCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default RemoveItemFromCart;
