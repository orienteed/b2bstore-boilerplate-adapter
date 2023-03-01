import { ClientProps } from 'src';
import { DeleteCustomerAddressFromAddressBookMutationVariables } from '@schema';

const DeleteCustomerAddressFromAddressBook =
    (clientProps: ClientProps) => (resolverProps: DeleteCustomerAddressFromAddressBookMutationVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default DeleteCustomerAddressFromAddressBook;
