import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <p>Learn TypeScript - Styles as Props</p>
      <Container styles={{ border: '1px solid white', padding: '1rem'}}/>
    </div>
  );
}

export default App;
