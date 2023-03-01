import { ClientProps } from 'src';
import { CreateAccountMutationVariables } from '@schema';

const CreateAccount = (clientProps: ClientProps) => (resolverProps: CreateAccountMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default CreateAccount;
