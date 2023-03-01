import { ClientProps } from 'src';
import { GetBillingAddressQueryVariables } from '@schema';

const GetBillingAddress = (clientProps: ClientProps) => (resolverProps: GetBillingAddressQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetBillingAddress;
