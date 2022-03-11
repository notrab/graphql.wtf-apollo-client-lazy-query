import { useMemo } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: `http://localhost:3000/api`,
        cache: new InMemoryCache(),
      }),
    []
  );

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
