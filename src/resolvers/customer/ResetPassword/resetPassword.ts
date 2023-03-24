import { ClientProps } from 'src';
import { ResetPasswordMutationVariables } from '@schema';

const ResetPassword = (clientProps: ClientProps) => (resolverProps: ResetPasswordMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default ResetPassword;
