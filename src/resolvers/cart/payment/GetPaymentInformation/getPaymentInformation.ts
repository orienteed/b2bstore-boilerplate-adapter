import { ClientProps } from 'src';
import { GetPaymentInformationQueryVariables } from '@schema';

const GetPaymentInformation = (clientProps: ClientProps) => (resolverProps: GetPaymentInformationQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetPaymentInformation;
