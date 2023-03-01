import { ClientProps } from 'src';
import { GetAppliedCouponsQueryVariables } from '@schema';

const GetAppliedCoupons = (clientProps: ClientProps) => (resolverProps: GetAppliedCouponsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetAppliedCoupons;
