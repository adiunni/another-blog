/* This is a react component. A component is used to display different UI in a page*/

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

function App() {

  const title = 'This is a webiste ;)';
  const likes = 50

  return (
    <div>
      <Navbar></Navbar>
      <div className="content App">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"Bonjour monsieur"}</p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
