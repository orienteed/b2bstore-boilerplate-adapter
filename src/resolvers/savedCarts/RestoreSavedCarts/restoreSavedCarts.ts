import { ClientProps } from 'src';
import { RestoreSavedCartsMutationVariables } from '@schema';

const RestoreSavedCarts = (clientProps: ClientProps) => (resolverProps: RestoreSavedCartsMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default RestoreSavedCarts;
