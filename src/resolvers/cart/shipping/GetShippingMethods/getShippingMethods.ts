import { ClientProps } from 'src';
import { GetShippingMethodsQueryVariables } from '@schema';

const GetShippingMethods = (clientProps: ClientProps) => (resolverProps: GetShippingMethodsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetShippingMethods;
