import './App.css';
import SimpleCounterComponent from './component/SimpleCounterComponent';
import PureCounterComponent from './component/PureCounterComponent';
function App() {
  return (
    <div >
      <SimpleCounterComponent/>
      <PureCounterComponent/>
    </div>
  );
}

export default App;