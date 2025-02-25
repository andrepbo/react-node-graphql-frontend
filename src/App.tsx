import { gql, useQuery } from '@apollo/client';
import './App.css';
import List from './components/common/List';

const GET_ITEMS = gql`
  query GetItems {
    items {
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <div><p>Loading...</p></div>;
  if (error) return <div><p>Error: {error.message}</p></div>;

  return (
    <div className="App">
      <header className="App-header">
        <List items={data.items.map((item: any) => item.name)} />
      </header>
    </div>
  );
}

export default App;
