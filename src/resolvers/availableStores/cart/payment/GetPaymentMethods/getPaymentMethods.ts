import { ClientProps } from 'src';
import { GetPaymentMethodsQueryVariables } from '@schema';

const GetPaymentMethods = (clientProps: ClientProps) => (resolverProps: GetPaymentMethodsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetPaymentMethods;
