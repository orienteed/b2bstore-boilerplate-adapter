import { ClientProps } from 'src';
import { GetCartDetailsQueryVariables } from '@schema';

const GetCartDetails = (clientProps: ClientProps) => (resolverProps: GetCartDetailsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCartDetails;
