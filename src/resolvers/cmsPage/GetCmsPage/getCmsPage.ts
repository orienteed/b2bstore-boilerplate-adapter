import { ClientProps } from 'src';
import { GetCmsPageQueryVariables } from '@schema';

const GetCmsPage = (clientProps: ClientProps) => (resolverProps: GetCmsPageQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCmsPage;
