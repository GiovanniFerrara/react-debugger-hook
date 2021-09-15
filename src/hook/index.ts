import { useContext } from 'react';
import DebuggerContext from '../context/debugger-context';
import { DebuggerHookInterface } from '../types';

const DebuggerHook = (): DebuggerHookInterface => {
  const { debuggerProps, setDebuggerProp } = useContext(DebuggerContext);
  return { debuggerProps, setDebuggerProp };
};

export default DebuggerHook;
