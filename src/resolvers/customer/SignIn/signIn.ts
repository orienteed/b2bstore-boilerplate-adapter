import { ClientProps } from 'src';
import { SignInMutationVariables } from '@schema';

const SignIn = (clientProps: ClientProps) => (resolverProps: SignInMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SignIn;
