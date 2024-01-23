import './App.css';
import Topic from './components/Topic';
import History from './components/history.jpeg'
import Geography from './components/geography.webp'
import ComputerScience from './components/compsci.jpeg'
import Football from './components/football.jpeg'


function App() {
  return (
    <div className="App">
    <h1 className="welcome-title">Welcome to my blog-site!</h1>
    <div className="topics">
      <Topic title="History" image={History} />
      <Topic title="Geography" image={Geography}/> 
      <Topic title="Computer Science" image={ComputerScience}/> 
      <Topic title="Football" image={Football}/> 
    </div>

    <div className='chatbot'>Chatbot...Coming soon...</div>
    </div>
  );
}

export default App;
