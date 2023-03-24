# Fragments

If you are using GraphQL, you will probably need to use fragments. This section will explain what fragments are and how to use them.

## What is a fragment?

A fragment is a reusable piece of GraphQL code that can be used in multiple places. It is a way to avoid repeating the same code in multiple places.

## How to create a fragment?

To create a fragment, you need to create a file in the `fragments` folder (if the folder doesn't exist, create it at the same level of `resolvers`). The name of the file will be the name of the fragment. For example, if you want to create a fragment called `User`, you need to create a file called `User.ts` in the `fragments` folder.

The fragment file needs to export a `gql` template literal with the fragment definition. For example, if you want to create a fragment called `User`, you need to export a `gql` template literal with the fragment definition.

```js
export const User = gql`
    fragment User on User {
        id
        name
        email
    }
`;
```

## How to use a fragment?

To use a fragment, you need to import it in the query or mutation where you want to use it. For example, if you want to use the `User` fragment in the `User` query, you need to import it in the `User` query.

```js
import { User } from './fragments';

export const User = gql`
    query User {
        user {
            ...User
        }
    }
    ${User}
`;
```
