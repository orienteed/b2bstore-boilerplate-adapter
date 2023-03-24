import { ClientProps } from 'src';
import { GetCheckoutDetailsQueryVariables } from '@schema';

const GetCheckoutDetails = (clientProps: ClientProps) => (resolverProps: GetCheckoutDetailsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCheckoutDetails;
