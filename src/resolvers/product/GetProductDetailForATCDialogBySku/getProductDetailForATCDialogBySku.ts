import { ClientProps } from 'src';
import { GetProductDetailForAtcDialogBySkuQueryVariables } from '@schema';

const GetProductDetailForATCDialogBySku =
    (clientProps: ClientProps) => (resolverProps: GetProductDetailForAtcDialogBySkuQueryVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default GetProductDetailForATCDialogBySku;
