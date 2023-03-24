import { ClientProps } from 'src';
import { GetOrderDetailsQueryVariables } from '@schema';

const GetOrderDetails = (clientProps: ClientProps) => (resolverProps: GetOrderDetailsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetOrderDetails;
