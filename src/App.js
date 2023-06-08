import './App.css';
import Introduction from './components/Introduction';
import { MediaBar } from './components/media/MediaBar';
import { MyProjects } from './components/MyProjects';
import { Skills } from './components/Skills';
import { ContactMe } from './components/ContactMe';
import me from './components/project-images/me.jpeg'


function App() {
  return (
    <div className="App">
      <img src={me} alt="me" className='me'/>
      <Introduction/>
      <MyProjects />
      <Skills />
      <ContactMe/>
      <footer></footer>
      <MediaBar />
    </div>
  );
}

export default App;
