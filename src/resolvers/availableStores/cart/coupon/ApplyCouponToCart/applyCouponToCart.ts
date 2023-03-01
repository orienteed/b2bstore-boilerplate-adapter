import { ClientProps } from 'src';
import { ApplyCouponToCartMutationVariables } from '@schema';

const ApplyCouponToCart = (clientProps: ClientProps) => (resolverProps: ApplyCouponToCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default ApplyCouponToCart;
