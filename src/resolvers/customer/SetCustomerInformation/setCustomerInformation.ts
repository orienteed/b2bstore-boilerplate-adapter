import { ClientProps } from 'src';
import { SetCustomerInformationMutationVariables } from '@schema';

const SetCustomerInformation = (clientProps: ClientProps) => (resolverProps: SetCustomerInformationMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SetCustomerInformation;
