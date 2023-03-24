import { ClientProps } from 'src';
import { GetSelectedPaymentMethodQueryVariables } from '@schema';

const GetSelectedPaymentMethod = (clientProps: ClientProps) => (resolverProps: GetSelectedPaymentMethodQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetSelectedPaymentMethod;
