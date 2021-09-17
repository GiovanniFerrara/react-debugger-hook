import logo from './logo.svg';
import './App.css';
import { ReactDebuggerProvider, ReactDebuggerConsole } from 'react-debugger-hook'
import ComponentToDebug from './ComponentToDebug';

function App() {
   return (
    <ReactDebuggerProvider>
      <ReactDebuggerConsole />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ComponentToDebug />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
    </ReactDebuggerProvider>
  );
}

export default App;
