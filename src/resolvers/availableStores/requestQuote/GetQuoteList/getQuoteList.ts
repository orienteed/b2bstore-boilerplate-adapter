import { ClientProps } from 'src';
import { GetQuoteListQueryVariables } from '@schema';

const GetQuoteList = (clientProps: ClientProps) => (resolverProps: GetQuoteListQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetQuoteList;
