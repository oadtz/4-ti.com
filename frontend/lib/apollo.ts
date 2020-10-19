import withApollo from "next-with-apollo"
import ApolloClient, { InMemoryCache } from "apollo-boost"

const GRAPHQL_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: `${GRAPHQL_URL}/graphql`,
      cache: new InMemoryCache().restore(initialState || {})
    })
)

// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const GRAPHQL_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
// const client = new ApolloClient({
//   uri: `${GRAPHQL_URL}/graphql`,
//   cache: new InMemoryCache()
// });

// export default client;