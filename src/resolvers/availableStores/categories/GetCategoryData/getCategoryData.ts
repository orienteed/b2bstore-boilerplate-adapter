import { ClientProps } from 'src';
import { GetCategoryDataQueryVariables } from '@schema';

const GetCategoryData = (clientProps: ClientProps) => (resolverProps: GetCategoryDataQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCategoryData;
