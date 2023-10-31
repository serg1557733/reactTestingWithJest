
import './App.css';
import List from '../LIst/List';
import Search from '../Search/Search';
import { useState } from 'react';


function App() {
  
  const data = ['css', 'angular', 'html', 'js', 'mongo', 'react', 'node js', 'ws'];
  const [search, setSearch] = useState('');

  return (

  <div className="App">
      <List item = {data} />
      <Search value = {search} onChange = {e =>setSearch(e.target.value)} >
        Find some...
      </Search>
    </div>
  );
}

export default App;
