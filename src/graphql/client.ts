import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "http://localhost:3000",
    }),
    cache: new InMemoryCache(),
});