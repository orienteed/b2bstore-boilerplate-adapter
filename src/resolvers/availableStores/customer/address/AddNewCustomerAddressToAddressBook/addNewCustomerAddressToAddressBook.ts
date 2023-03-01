import { ClientProps } from 'src';
import { AddNewCustomerAddressToAddressBookMutationVariables } from '@schema';

const AddNewCustomerAddressToAddressBook =
    (clientProps: ClientProps) => (resolverProps: AddNewCustomerAddressToAddressBookMutationVariables) => {
        // Look docs for more info about how to fill this function

        return { data: {}, loading: false, error: undefined };
    };

export default AddNewCustomerAddressToAddressBook;
