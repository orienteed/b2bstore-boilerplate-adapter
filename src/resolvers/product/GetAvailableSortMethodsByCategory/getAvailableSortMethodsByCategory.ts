import { ClientProps } from 'src';
import { GetAvailableSortMethodsByCategoryQueryVariables } from '@schema';

const GetAvailableSortMethodsByCategory =
    (clientProps: ClientProps) => (resolverProps: GetAvailableSortMethodsByCategoryQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetAvailableSortMethodsByCategory;
