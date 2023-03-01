import { ClientProps } from 'src';
import { SaveSavedCartsMutationVariables } from '@schema';

const SaveSavedCarts = (clientProps: ClientProps) => (resolverProps: SaveSavedCartsMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SaveSavedCarts;
