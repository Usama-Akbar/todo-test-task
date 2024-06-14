import Home from './Pages/Home';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Todo from './Pages/Todo';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todo/:id?" element={<Todo />}/>
      </Routes>
    </div>
  );
}

export default App;
