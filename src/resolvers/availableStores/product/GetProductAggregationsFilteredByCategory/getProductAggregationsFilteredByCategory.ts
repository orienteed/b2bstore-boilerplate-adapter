import { ClientProps } from 'src';
import { GetProductAggregationsFilteredByCategoryQueryVariables } from '@schema';

const GetProductAggregationsFilteredByCategory =
    (clientProps: ClientProps) => (resolverProps: GetProductAggregationsFilteredByCategoryQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetProductAggregationsFilteredByCategory;
