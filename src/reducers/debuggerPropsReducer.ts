import {
  DebuggerAction, ActionTypes, DebuggerState,
} from '../types';

function debuggerPropsReducer(state: DebuggerState, action: DebuggerAction): DebuggerState {
  switch (action.type) {
    case ActionTypes.AddProp: {
      state.filter((prop) => prop.key !== action.prop.key);

      return [...state, action.prop];
    }
    case ActionTypes.RemoveProp: {
      state.filter((prop) => prop.key !== action.key);

      return [...state];
    }
    default:
      throw new Error('Wrong action dispatched!');
  }
}

export default debuggerPropsReducer;
