import { ClientProps } from 'src';
import { GetBreadcrumbsQueryVariables } from '@schema';

const GetBreadcrumbs = (clientProps: ClientProps) => (resolverProps: GetBreadcrumbsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetBreadcrumbs;
