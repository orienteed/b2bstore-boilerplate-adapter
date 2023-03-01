import { ClientProps } from 'src';
import { GetCmsBlocksQueryVariables } from '@schema';

const GetCmsBlocks = (clientProps: ClientProps) => (resolverProps: GetCmsBlocksQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetCmsBlocks;
