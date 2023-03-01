# Apollo Query

An example to execute a GraphQL query using the `apolloClient` setted from B2BStore.

```ts
const apolloClient = Client.getInstance().getApolloClient();

const { data, loading, error } = useQuery(YOUR_QUERY_HERE, {
    client: apolloClient,
    pollInterval: 0
});

return { data: parseData(data), loading, error };
```
