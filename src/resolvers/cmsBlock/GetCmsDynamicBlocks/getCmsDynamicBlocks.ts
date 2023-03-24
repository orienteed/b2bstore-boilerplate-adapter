import { ClientProps } from 'src';
import { GetCmsDynamicBlocksQueryVariables } from '@schema';

const GetCmsDynamicBlocks = (clientProps: ClientProps) => (resolverProps: GetCmsDynamicBlocksQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCmsDynamicBlocks;
