import { ClientProps } from 'src';
import { CancelQuoteMutationVariables } from '@schema';

const CancelQuote = (clientProps: ClientProps) => (resolverProps: CancelQuoteMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default CancelQuote;
