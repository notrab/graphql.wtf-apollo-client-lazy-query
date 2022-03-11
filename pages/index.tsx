import type { NextPage } from "next";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

const GET_RESULTS_QUERY = gql`
  query GetResults {
    results
  }
`;

const ResultList = ({
  data,
  loading,
}: {
  data: { results: string[] };
  loading: boolean;
}) => {
  if (loading) return <p>loading...</p>;

  return (
    <ul>
      {data?.results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </ul>
  );
};

const Home: NextPage = () => {
  const results = useQuery(GET_RESULTS_QUERY);
  const [getLazyResults, lazyResults] = useLazyQuery(GET_RESULTS_QUERY);

  return (
    <div>
      <h2>
        Apollo Client <code>useQuery</code>
      </h2>
      <ResultList {...results} />
      <hr />
      <h2>
        Apollo Client <code>useLazyQuery</code>
      </h2>
      <button onClick={() => getLazyResults()}>Get results</button>
      <ResultList {...lazyResults} />
    </div>
  );
};

export default Home;
