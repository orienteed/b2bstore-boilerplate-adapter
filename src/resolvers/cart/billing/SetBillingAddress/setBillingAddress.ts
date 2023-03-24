import { ClientProps } from 'src';
import { SetBillingAddressMutationVariables } from '@schema';

const SetBillingAddress = (clientProps: ClientProps) => (resolverProps: SetBillingAddressMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SetBillingAddress;
