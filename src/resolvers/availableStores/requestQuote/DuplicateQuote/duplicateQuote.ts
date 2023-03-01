import { ClientProps } from 'src';
import { DuplicateQuoteMutationVariables } from '@schema';

const DuplicateQuote = (clientProps: ClientProps) => (resolverProps: DuplicateQuoteMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default DuplicateQuote;
