import { ClientProps } from 'src';
import { RemoveCouponFromCartMutationVariables } from '@schema';

const RemoveCouponFromCart = (clientProps: ClientProps) => (resolverProps: RemoveCouponFromCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default RemoveCouponFromCart;
