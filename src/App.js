import './App.css';
import image from './fish2.jpg';
//import imageTwo from './fish.jpg';

import {ToDoList} from './ToDoList';


function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="cramp-fish" src= {image} width="200px" alt="skat" />
      </div>
      <div className="container">
        <h1>To Do List</h1>
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
