import { ClientProps } from 'src';
import { DeleteSavedCartsMutationVariables } from '@schema';

const DeleteSavedCarts = (clientProps: ClientProps) => (resolverProps: DeleteSavedCartsMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default DeleteSavedCarts;
