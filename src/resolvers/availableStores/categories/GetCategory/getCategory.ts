import { ClientProps } from 'src';
import { GetCategoryQueryVariables } from '@schema';

const GetCategory = (clientProps: ClientProps) => (resolverProps: GetCategoryQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCategory;
