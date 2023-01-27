# REST Query

An example to execute a REST query using the `restClient` setted from B2BStore.

```ts
const restClient = Client.getInstance().getRestClient();
const [loading, setLoading] = useState(true);
const [data, setData] = useState<INTERFACE_EXPECTED_TO_RETURN_HERE | null>(
  null
);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const rawData = await restClient("YOUR_URL_HERE", {
        method: "YOUR_METHOD_HERE",
        headers: {
          YOUR_HEADER_NAME_HERE: "YOUR_HEADER_VALUE_HERE",
        },
      });
      setData(parseData(rawData));
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };
  fetchData();
}, []);

return { data, loading, error };
```
