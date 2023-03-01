import { ClientProps } from 'src';
import { GetAvailableSortMethodsBySearchQueryVariables } from '@schema';

const GetAvailableSortMethodsBySearch = (clientProps: ClientProps) => (resolverProps: GetAvailableSortMethodsBySearchQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetAvailableSortMethodsBySearch;
