import { ClientProps } from 'src';
import { GetImageBySkuQueryVariables } from '@schema';

const GetImageBySku = (clientProps: ClientProps) => (resolverProps: GetImageBySkuQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetImageBySku;
