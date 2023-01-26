export class Client {
    private apolloClient: any;
    private restClient: any;
    private static instance: Client;

    private constructor() {}

    public static getInstance(): Client {
        if (!Client.instance) {
            Client.instance = new Client();
        }
        return Client.instance;
    }

    public setApolloClient(apolloClient: any): void {
        this.apolloClient = apolloClient;
    }

    public setRestClient(restClient: any): void {
        this.restClient = restClient;
    }

    public getApolloClient(): any {
        return this.apolloClient;
    }

    public getRestClient(): any {
        return this.restClient;
    }
}
