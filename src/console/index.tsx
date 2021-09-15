import React, {
  FormEvent, useState, FC, useContext,
} from 'react';
import DebuggerContext from '../context/debugger-context';
import { DebuggerProp } from '../types';
import './styles.scss';

const Console: FC = () => {
  const { setDebuggerProp, debuggerProps } = useContext(DebuggerContext);
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
      <button className="react-debugger-hook_button" type="button" onClick={handleToggleClick}>
        Debugger
      </button>
      {isOpen && (
      <div className="react-debugger-hook_console-wrapper">
        {debuggerProps.map((debugProp: DebuggerProp) => (
          <div className="react-debugger-hook_debug-prop" key={debugProp.key}>
            <div className="react-debugger-hook_label">
              {' '}
              {debugProp.key}
              {' '}
            </div>
            <input
              className="react-debugger-hook_input"
              value={debugProp.value}
              onChange={(e: FormEvent<HTMLInputElement>) => handlePropertyChange(e, debugProp.key)}
            />
          </div>
        ))}
      </div>
      )}
    </>
  );
};

export default Console;
