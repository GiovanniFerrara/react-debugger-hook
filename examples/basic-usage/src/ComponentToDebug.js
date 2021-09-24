import React from 'react'
import { useDebuggerHook } from 'react-debugger-hook'

const ComponentToDebug = () => {
  const color = useDebuggerHook('color', '#fff')
  const yourName = useDebuggerHook('Your name', 'John')
  return (<div style={{color: color}}>
    {`Hello from ${yourName}`}
  </div>)
}

export default ComponentToDebug