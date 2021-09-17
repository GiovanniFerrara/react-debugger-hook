import React from 'react'
import { useDebuggerHook } from 'react-debugger-hook'

const Box = () => {
  const name = useDebuggerHook('name', 'value')
  return (<div>
    Hello from
    {name}
  </div>)
}

export default Box