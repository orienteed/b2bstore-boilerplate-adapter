import { ClientProps } from 'src';
import { GetItemCountQueryVariables } from '@schema';

const GetItemCount = (clientProps: ClientProps) => (resolverProps: GetItemCountQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetItemCount;
