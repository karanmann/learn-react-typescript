import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <p>Learn TypeScript - Events</p>
      <Button handleClick={(event, id) => console.log('Button Clicked', event, id)} />
      <Input value='' handleChange={event => console.log(event)}/>
    </div>
  );
}

export default App;
1