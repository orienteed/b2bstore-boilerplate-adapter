import { ClientProps } from 'src';
import { SetDefaultBillingAddressMutationVariables } from '@schema';

const SetDefaultBillingAddress = (clientProps: ClientProps) => (resolverProps: SetDefaultBillingAddressMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SetDefaultBillingAddress;
