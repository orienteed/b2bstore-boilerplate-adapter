import { ClientProps } from 'src';
import { SubscribeToNewsletterMutationVariables } from '@schema';

const SetNewsletterSubscription = (clientProps: ClientProps) => (resolverProps: SubscribeToNewsletterMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default SetNewsletterSubscription;
