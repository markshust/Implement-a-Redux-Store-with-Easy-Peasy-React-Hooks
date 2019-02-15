import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useStore, useActions } from 'easy-peasy';

function App() {
  const todos = useStore(state => state.todos.items);
  const [name, setName] = useState();
  const add = useActions(actions => actions.todos.add);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => add(name) && setName('')}>Submit</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
