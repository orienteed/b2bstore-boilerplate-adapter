import { ClientProps } from 'src';
import { GetGiftOptionsQueryVariables } from '@schema';

const GetGiftOptions = (clientProps: ClientProps) => (resolverProps: GetGiftOptionsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetGiftOptions;
