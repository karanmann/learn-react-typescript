import './App.css';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Greet from './components/Greet';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
      <p>Learn TypeScript</p>
      <Heading> Placeholder Text</Heading>
      <Status status="error"/>
      <Oscar>
        <Heading>Oscar goes to Morgan Freeman</Heading>
      </Oscar>
      <Greet name="karan" messageCount={10}/>
    </div>
  );
}

export default App;
