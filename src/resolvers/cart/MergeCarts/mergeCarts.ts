import { ClientProps } from 'src';
import { MergeCartsMutationVariables } from '@schema';

const MergeCarts = (clientProps: ClientProps) => (resolverProps: MergeCartsMutationVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default MergeCarts;
