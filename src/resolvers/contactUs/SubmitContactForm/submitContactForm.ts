import { ClientProps } from 'src';
import { SubmitContactFormMutationVariables } from '@schema';

const SubmitContactForm = (clientProps: ClientProps) => (resolverProps: SubmitContactFormMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SubmitContactForm;
