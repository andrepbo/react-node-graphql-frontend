import { useQuery } from '@apollo/client';
import List from './components/common/List';
import Loading from './components/common/Loading';
import ErrorMessage from './components/common/ErrorMessage';
import { GET_ITEMS } from './graphql/queries/getItems';

function App() {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <header>
        <List items={data.items.map((item: any) => item.name)} />
      </header>
    </div>
  );
}

export default App;
