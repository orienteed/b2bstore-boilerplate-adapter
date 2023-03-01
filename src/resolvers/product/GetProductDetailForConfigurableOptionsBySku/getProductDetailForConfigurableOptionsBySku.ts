import { ClientProps } from 'src';
import { GetProductDetailForConfigurableOptionsBySkuQueryVariables } from '@schema';

const GetProductDetailForConfigurableOptionsBySku =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForConfigurableOptionsBySkuQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetProductDetailForConfigurableOptionsBySku;
