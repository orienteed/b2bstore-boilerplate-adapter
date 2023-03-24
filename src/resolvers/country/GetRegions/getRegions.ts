import { ClientProps } from 'src';
import { GetRegionsQueryVariables } from '@schema';

const GetRegions = (clientProps: ClientProps) => (resolverProps: GetRegionsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetRegions;
