import { ClientProps } from 'src';
import { GetAutocompleteResultsQueryVariables } from '@schema';

const GetAutocompleteResults = (clientProps: ClientProps) => (resolverProps: GetAutocompleteResultsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetAutocompleteResults;
