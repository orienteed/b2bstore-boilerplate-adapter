import { ClientProps } from 'src';
import { GetSelectedAndAvailableShippingMethodsQueryVariables } from '@schema';

const GetSelectedAndAvailableShippingMethods =
    (clientProps: ClientProps) => (resolverProps: GetSelectedAndAvailableShippingMethodsQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetSelectedAndAvailableShippingMethods;
