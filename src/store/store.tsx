import React, { FC, useState } from 'react';
import { DebuggerProp } from '../types';
import DebuggerContext from './context';

const ReactDebuggerProvider:FC = ({ children }) => {
  const [debuggerProps, setDebuggerProps] = useState<DebuggerProp[]>([]);

  const setDebuggerProp = (prop: DebuggerProp) => {
    const alreadyExists = debuggerProps.some((p) => p.key === prop.key && p.value === prop.value);
    if (!alreadyExists) {
      setDebuggerProps((oldProps) => {
        const newProps = oldProps.filter((p) => p.key !== prop.key);
        return [...newProps, prop];
      });
    }

    return debuggerProps;
  };

  return (
    <DebuggerContext.Provider value={{
      debuggerProps, setDebuggerProp,
    }}
    >
      {children}
    </DebuggerContext.Provider>
  );
};

export default ReactDebuggerProvider;
