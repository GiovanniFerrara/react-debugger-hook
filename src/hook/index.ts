import { useEffect } from 'react';
import { useStore } from '../store/context';

const useDebuggerHook = (key: string, value: string): string | undefined => {
  const { debuggerProps, setDebuggerProp } = useStore();

  useEffect(() => {
    setDebuggerProp({ key, value });
  }, [key, value, setDebuggerProp]);

  return debuggerProps.find((p) => p.key === key)?.value;
};

export default useDebuggerHook;
