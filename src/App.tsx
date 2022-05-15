import './App.css';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonsList from './components/PersonsList';

const nameList = [
  {first: "Clark", last:"Kent"},
  {first: "Tony", last:"Stark"},
  {first: "Bruce", last:"Wayne"},

]

function App() {
  return (
    <div className="App">
      <p>Learn TypeScript</p>
      <Greet name="Karan" messageCount={10} isLoggedIn={false}/>
      <Person firstName="Bruce" lastName="Wayne"/>
      <PersonsList names={nameList} />
    </div>
  );
}

export default App;
