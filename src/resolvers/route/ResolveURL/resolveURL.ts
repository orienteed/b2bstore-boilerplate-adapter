import { ClientProps } from 'src';
import { ResolveUrlQueryVariables } from '@schema';

const ResolveURL = (clientProps: ClientProps) => (resolverProps: ResolveUrlQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default ResolveURL;
