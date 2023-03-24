import { ClientProps } from 'src';
import { GetPaymentNonceQueryVariables } from '@schema';

const GetPaymentNonce = (clientProps: ClientProps) => (resolverProps: GetPaymentNonceQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetPaymentNonce;
