import React, { FC, useReducer } from 'react';
import Console from '../console';
import debuggerPropsReducer from '../reducers/debuggerPropsReducer';
import { ActionTypes, DebuggerProp } from '../types';
import DebuggerContext from './debugger-context';

const ReactDebuggerProvider:FC = ({ children }) => {
  const [debuggerProps, dispatch] = useReducer(debuggerPropsReducer, []);

  const setDebuggerProp = (prop: DebuggerProp) => dispatch({ type: ActionTypes.AddProp, prop });
  const removeDebuggerProp = (key: string) => dispatch({ type: ActionTypes.RemoveProp, key });

  return (
    <DebuggerContext.Provider value={{ debuggerProps, setDebuggerProp, removeDebuggerProp }}>
      <Console />
      {children}
    </DebuggerContext.Provider>
  );
};

export default ReactDebuggerProvider;
