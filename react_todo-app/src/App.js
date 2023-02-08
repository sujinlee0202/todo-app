import { useCallback, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { DarkmodeContextProvider } from './context/DarkmodeContext';

const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setFilter] = useState('all');

  const handleFilter = useCallback((filter) => {
    setFilter(filter)
  }, [])

  return (
    <>
      <DarkmodeContextProvider>
        <Header filters={filters} handleFilter={handleFilter} />
        <TodoList filter={filter} />
      </DarkmodeContextProvider>
    </>
  );
}

export default App;
