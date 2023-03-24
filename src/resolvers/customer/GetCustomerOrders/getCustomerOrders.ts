import { ClientProps } from 'src';
import { GetCustomerOrdersQueryVariables } from '@schema';

const GetCustomerOrders = (clientProps: ClientProps) => (resolverProps: GetCustomerOrdersQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCustomerOrders;
