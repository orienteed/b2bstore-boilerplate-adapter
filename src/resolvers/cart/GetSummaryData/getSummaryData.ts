import { ClientProps } from 'src';
import { GetSummaryDataQueryVariables } from '@schema';

const GetSummaryData = (clientProps: ClientProps) => (resolverProps: GetSummaryDataQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetSummaryData;
