
import './App.css';
import List from '../LIst/List';
import Search from '../Search/Search';


function App() {
  
  const data = ['css', 'angular', 'html', 'js', 'mongo', 'react', 'node js', 'ws'];
  
  return (

  <div className="App">
      <List item = {data} />
      <Search></Search>
    </div>
  );
}

export default App;
