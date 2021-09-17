export type DebuggerProp = {
  key: string
  value: string
}

export enum ActionTypes {
  AddProp,
  RemoveProp,
}

export type DebuggerState = DebuggerProp[]

export type DebuggerAction =
| { type: ActionTypes.AddProp, prop: DebuggerProp }
| { type: ActionTypes.RemoveProp, key: string }

export interface DebuggerContextInterface {
  debuggerProps: DebuggerProp[],
  setDebuggerProp: (arg: DebuggerProp) => void,
}

export interface DebuggerHookInterface {
  debuggerProps: DebuggerProp[],
  setDebuggerProp: (arg: DebuggerProp) => void,
}
