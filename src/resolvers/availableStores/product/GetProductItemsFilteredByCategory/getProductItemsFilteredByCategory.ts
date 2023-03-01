import { ClientProps } from 'src';
import { GetProductItemsFilteredByCategoryQueryVariables } from '@schema';

const GetProductItemsFilteredByCategory =
    (clientProps: ClientProps) => (resolverProps: GetProductItemsFilteredByCategoryQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetProductItemsFilteredByCategory;
