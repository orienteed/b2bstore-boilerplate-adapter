import { ClientProps } from 'src';
import { ShareSavedCartsMutationVariables } from '@schema';

const ShareSavedCarts = (clientProps: ClientProps) => (resolverProps: ShareSavedCartsMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default ShareSavedCarts;
