import { ClientProps } from 'src';
import { UpdateQuoteMutationVariables } from '@schema';

const UpdateQuote = (clientProps: ClientProps) => (resolverProps: UpdateQuoteMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default UpdateQuote;
