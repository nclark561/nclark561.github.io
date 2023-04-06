import './App.css';
import Introduction from './components/Introduction';
import { MediaBar } from './components/media/MediaBar';


function App() {
  return (
    <div className="App">
      <Introduction/>
      <MediaBar />
    </div>
  );
}

export default App;
