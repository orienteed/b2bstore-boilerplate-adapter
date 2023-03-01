import { ClientProps } from 'src';
import { GetAppliedGiftCardsQueryVariables } from '@schema';

const GetAppliedGiftCards = (clientProps: ClientProps) => (resolverProps: GetAppliedGiftCardsQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetAppliedGiftCards;
