import { ClientProps } from 'src';
import { SetShippingAddressMutationVariables } from '@schema';

const SetShippingAddress = (clientProps: ClientProps) => (resolverProps: SetShippingAddressMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SetShippingAddress;
