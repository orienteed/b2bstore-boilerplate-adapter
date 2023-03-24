import { ClientProps } from 'src';
import { SetNewsletterSubscriptionMutationVariables } from '@schema';

const GetCustomerSubscription = (clientProps: ClientProps) => (resolverProps: SetNewsletterSubscriptionMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCustomerSubscription;
