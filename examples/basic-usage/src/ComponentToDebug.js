import React from 'react'
import { useDebuggerHook } from 'react-debugger-hook'

const Box = () => {
  const color = useDebuggerHook('color', '#fff')
  const text = useDebuggerHook('text', 'Your name')
  return (<div style={{color: color}}>
    Hello from
    {text}
  </div>)
}

export default Box