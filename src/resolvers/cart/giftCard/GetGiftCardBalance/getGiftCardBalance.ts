import { ClientProps } from 'src';
import { GetGiftCardBalanceQueryVariables } from '@schema';

const GetGiftCardBalance = (clientProps: ClientProps) => (resolverProps: GetGiftCardBalanceQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetGiftCardBalance;
