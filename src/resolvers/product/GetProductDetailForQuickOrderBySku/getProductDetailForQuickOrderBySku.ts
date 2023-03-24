import { ClientProps } from 'src';
import { GetProductDetailForQuickOrderBySkuQueryVariables } from '@schema';

const GetProductDetailForQuickOrderBySku =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForQuickOrderBySkuQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetProductDetailForQuickOrderBySku;
