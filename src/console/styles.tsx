import { CSSProperties } from 'react';

export const consoleWrapper: CSSProperties = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  width: 200,
  height: 100,
  zIndex: 200000000,
  backgroundColor: 'rgba(0,0,0,0.8)',
  color: 'red',
};

export const button: CSSProperties = {
  position: 'fixed',
  bottom: 20,
  left: 20,
  zIndex: 200000000,
  padding: 8,
  backgroundColor: 'rgba(0,0,0,0.8)',
  color: 'red',
};

export const debugProp: CSSProperties = {
  paddingLeft: 16,
  alignItems: 'center',
};
export const hookLabel: CSSProperties = {
  whiteSpace: 'nowrap',
  paddingBottom: 8,
  paddingTop: 8,
  fontSize: 16,
};

export const hookInput: CSSProperties = {
  color: '#000',
  fontSize: '16px',
};
