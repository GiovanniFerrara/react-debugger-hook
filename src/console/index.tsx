import React, {
  FormEvent, useState, FC,
} from 'react';
import { useStore } from '../store/context';
import { DebuggerProp } from '../types';
import ReactDebuggerProvider from '../store/store';
import * as styles from './styles';

const Console: FC = () => {
  const { setDebuggerProp, debuggerProps } = useStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleClick = () => {
    setIsOpen((open) => !open);
  };

  const handlePropertyChange = (e: FormEvent<HTMLInputElement>, key: string) => {
    const { value } = e.currentTarget;
    setDebuggerProp({ key, value });
  };

  if (!debuggerProps.length) return null;

  return (
    <>
      <ReactDebuggerProvider>
        <button style={styles.button} type="button" onClick={handleToggleClick}>
          {`${!isOpen ? 'Open' : 'Close'}`}
        </button>
        {isOpen && (
        <div style={styles.consoleWrapper}>
          {debuggerProps.sort((a: DebuggerProp, b: DebuggerProp) => ((a.key < b.key) ? 1 : -1))
            .map((debugProp: DebuggerProp) => (
              <div style={styles.debugProp} key={debugProp.key}>
                <div style={styles.hookLabel}>
                  {debugProp.key}
                </div>
                <input
                  style={styles.hookInput}
                  value={debugProp.value}
                  onChange={
                  (e: FormEvent<HTMLInputElement>) => handlePropertyChange(e, debugProp.key)
                }
                />
              </div>
            ))}
        </div>
        )}
      </ReactDebuggerProvider>
    </>
  );
};

export default Console;
