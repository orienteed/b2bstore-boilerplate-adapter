import { ClientProps } from 'src';
import { GetSalesRulesDataQueryVariables } from '@schema';

const GetSalesRulesData = (clientProps: ClientProps) => (resolverProps: GetSalesRulesDataQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetSalesRulesData;
