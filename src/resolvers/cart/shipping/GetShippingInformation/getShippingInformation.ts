import { ClientProps } from 'src';
import { GetShippingInformationQueryVariables } from '@schema';

const GetShippingInformation = (clientProps: ClientProps) => (resolverProps: GetShippingInformationQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetShippingInformation;
