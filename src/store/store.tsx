import React, { FC, useState, useCallback } from 'react';
import { DebuggerProp } from '../types';
import DebuggerContext from './context';

const ReactDebuggerProvider:FC = ({ children }) => {
  const [debuggerProps, setDebuggerProps] = useState<DebuggerProp[]>([]);

  const setDebuggerProp = useCallback((prop: DebuggerProp) => {
    const alreadyExists = debuggerProps.some((p) => p.key === prop.key && p.value === prop.value);
    if (!alreadyExists) {
      const newProps = debuggerProps.filter((p) => p.key !== prop.key);
      setDebuggerProps(() => [...newProps, prop]);
    }

    return debuggerProps;
  }, [debuggerProps.length]);

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
