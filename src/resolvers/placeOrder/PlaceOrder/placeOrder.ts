import { ClientProps } from 'src';
import { PlaceOrderMutationVariables } from '@schema';

const PlaceOrder = (clientProps: ClientProps) => (resolverProps: PlaceOrderMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default PlaceOrder;
