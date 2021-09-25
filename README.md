# react-debugger-hook
A hook that easily injects values to react apps through a user friendly console.

Live example: https://react-debugger-hook.netlify.app

This is designed for those who want to review a react project, being able to interact with things like: colors, styles, animations settings, run the app in different mode, and more...
React-debugger-hook allows you to have an easy to use console where the reviewer can input values (text, colors, ...) directly into your app.

## Install

```bash
npm i -S react-debugger-hook
```

## Usage
In this example, just by initializing these two variables, an "Open" button on the left side of the screen will be shown. 

When you click on that button, an input console on right side will be opened. There the reviewer can inject those values directly into your react app.

```js
// src/App.js
import { ReactDebuggerProvider, ReactDebuggerConsole } from 'react-debugger-hook'
import ComponentToDebug from './ComponentToDebug';

function App() {
   return (
    <ReactDebuggerProvider>
      {process.env.NODE_ENV !== 'production' && <ReactDebuggerConsole />}
          <ComponentToDebug />
    </ReactDebuggerProvider>
  );
}

export default App;

```

```js
// src/ComponentToDebug
import { useDebuggerHook } from 'react-debugger-hook'

const ComponentToDebug = () => {
  const color = useDebuggerHook('color', '#fff')
  const yourName = useDebuggerHook('Your name', 'John')

  return (
    <div style={{color}}>
    {`Hello from ${yourName}`}
  </div>)
}

export default ComponentToDebug
```

## API

#### useDebuggerHook

```js
import { useDebuggerHook } from 'react-debugger-hook'

const ComponentToDebug = () => {
  const currentValue = useDebuggerHook(key, initialValue)

  return (
    <div>
    {currentValue}
  </div>)
}

```
```
currentValue: String | the value that can be injected and changed through the console.

key: String | the name of the property to change, this is shown into the console. Choosing a meaningful name is recommended.

initialValue: String | the initial value.
```

#### ReactDebuggerProvider, ReactDebuggerConsole

```js
import { ReactDebuggerProvider, ReactDebuggerConsole } from 'react-debugger-hook'
import ComponentToDebug from './ComponentToDebug';

function App() {
   return (
    <ReactDebuggerProvider>
      <ReactDebuggerConsole />
      <ComponentToDebug />
    </ReactDebuggerProvider>
  );
}

```
```
ReactDebuggerConsole: ReactComponent | renders the console.

ReactDebuggerProvider: ReactComponent | Provides the context consumed by the hook.
```
## License

[MIT](http://vjpr.mit-license.org)
