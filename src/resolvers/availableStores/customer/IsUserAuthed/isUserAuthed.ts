import { ClientProps } from 'src';
import { IsUserAuthedQueryVariables } from '@schema';

const IsUserAuthed = (clientProps: ClientProps) => (resolverProps: IsUserAuthedQueryVariables) => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default IsUserAuthed;
