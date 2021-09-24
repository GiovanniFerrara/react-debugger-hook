# react-debugger-hook
A hook that easily injects values to react apps through a user friendly console.

This is designed for a person that can't run you project locally and make changes like: colors, styles, animations settings, run the app in different mode, and more...
But you can allow to change those values with a couple lines of code.

## Install

```bash
npm i -S react-debugger-hook
```

## Usage
In this example, by setting those two values, shows a button on the left side of the screen with written "Open Console". When you click on that button, a console on right side will be opened and there the user user can inject those values into your react app.

```js
// src/App.js
import { ReactDebuggerProvider, ReactDebuggerConsole } from 'react-debugger-hook'
import ComponentToDebug from './ComponentToDebug';

function App() {
   return (
    <ReactDebuggerProvider>
      {process.env.NODE_ENV === 'development' && <ReactDebuggerConsole />}
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
currentValue: String | the value that can be injected and changed though the console.

key: String | the name of the property to change, this is shown into the console, choose a meaningful name.

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

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master