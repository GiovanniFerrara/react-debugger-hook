import { createContext } from 'react';
import { DebuggerContextInterface } from '../types';

export const debuggerContext: DebuggerContextInterface = {
  debuggerProps: [],
  setDebuggerProp: () => null,
  removeDebuggerProp: () => null,
};

const DebuggerContext = createContext<DebuggerContextInterface>(
  debuggerContext,
);

export default DebuggerContext;
