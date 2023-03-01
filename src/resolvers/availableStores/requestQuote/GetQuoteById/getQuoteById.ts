import { ClientProps } from 'src';
import { GetQuoteByIdQueryVariables } from '@schema';

const GetQuoteById = (clientProps: ClientProps) => (resolverProps: GetQuoteByIdQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetQuoteById;
