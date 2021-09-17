import React from 'react'
import { useDebuggerHook } from 'react-debugger-hook'

const Box = () => {
  const name = useDebuggerHook('color', '#fff')
  return (<div style={{color: name}}>
    Hello from
    {' ' + name}
  </div>)
}

export default Box