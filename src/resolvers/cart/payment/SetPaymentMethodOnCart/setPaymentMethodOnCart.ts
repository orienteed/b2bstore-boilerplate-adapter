import { ClientProps } from 'src';
import { SetPaymentMethodOnCartMutationVariables } from '@schema';

const SetPaymentMethodOnCart = (clientProps: ClientProps) => (resolverProps: SetPaymentMethodOnCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SetPaymentMethodOnCart;
