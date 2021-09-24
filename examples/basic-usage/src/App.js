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
        </header>
      </div>
    </ReactDebuggerProvider>
  );
}

export default App;
