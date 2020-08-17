import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid';
import  'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// why my netlify not working=((()))
function App() {
  return (
    <div className="container">
      <div className='row'>
        <TodoInput/>
        <TodoList/>
      </div>
    </div>
  );
}
uuidv4(); 
export default App;
