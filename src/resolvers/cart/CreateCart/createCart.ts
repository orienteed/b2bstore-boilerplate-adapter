import { ClientProps } from 'src';
import { CreateCartMutationVariables } from '@schema';

const CreateCart = (clientProps: ClientProps) => (resolverProps: CreateCartMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default CreateCart;
