import { ClientProps } from 'src';
import { GetRouteDataQueryVariables } from '@schema';

const GetRouteData = (clientProps: ClientProps) => (resolverProps: GetRouteDataQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetRouteData;
