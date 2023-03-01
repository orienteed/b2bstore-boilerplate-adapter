import { ClientProps } from 'src';
const GetStoreConfig = (clientProps: ClientProps) => () => {
    // Look docs for more info about how to fill this function

    return { data: {}, loading: false, error: undefined };
};

export default GetStoreConfig;
