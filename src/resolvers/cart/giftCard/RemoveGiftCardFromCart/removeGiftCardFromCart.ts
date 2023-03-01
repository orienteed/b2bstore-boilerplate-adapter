import { ClientProps } from 'src';
import { RemoveGiftCardFromCartMutationVariables } from '@schema';

const RemoveGiftCardFromCart = (clientProps: ClientProps) => (resolverProps: RemoveGiftCardFromCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default RemoveGiftCardFromCart;
