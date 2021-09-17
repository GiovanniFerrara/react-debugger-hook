import { createContext, useContext } from 'react';
import { DebuggerContextInterface } from '../types';

export const debuggerDefaultStore: DebuggerContextInterface = {
  debuggerProps: [],
  setDebuggerProp: () => '',
};

const DebuggerContext = createContext<DebuggerContextInterface>(
  debuggerDefaultStore,
);

export const useStore = ():DebuggerContextInterface => useContext(DebuggerContext);

export default DebuggerContext;
