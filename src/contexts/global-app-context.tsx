import React, { FunctionComponent, useContext } from 'react';

export interface GlobalOfferFilters {
  searchQuery?: string;
  /**
   * null - all offers
   * true - with salary
   * false - undisclosed salary (just for fun)
   */
  withSalary: boolean | null;
  techStack: string;
  salaryRange: [number, number];
}

export interface GlobalAppState {
  filters: GlobalOfferFilters;
}

interface AppStateContext {
  state: GlobalAppState;
  dispatch: React.Dispatch<AppAction>;
}

// TODO: factory functions for actions
type AppAction =
  | { type: 'MERGE_FILTER'; payload: Partial<GlobalOfferFilters> }
  | { type: 'SET_FILTER'; payload: GlobalOfferFilters };

/**
 * Application state reducer.
 *
 * @param state
 * @param action
 */
function reducer(state: GlobalAppState, action: AppAction): GlobalAppState {
  console.log('Action', action.type, action.payload);

  switch (action.type) {
    case 'MERGE_FILTER': {
      const filters = { ...state.filters, ...action.payload };
      return { ...state, filters };
    }

    case 'SET_FILTER': {
      return { ...state, filters: action.payload };
    }
  }

  return state;
}

export const initialAppState: GlobalAppState = {
  filters: {
    techStack: 'all',
    withSalary: false,
    salaryRange: [0, Infinity],
  },
};

export const AppState = React.createContext<AppStateContext>({
  state: initialAppState,
  dispatch: (value: AppAction) =>
    console.warn('App state dispatcher not provided.'),
});

export function useAppState(): [GlobalAppState, React.Dispatch<AppAction>] {
  const { state, dispatch } = useContext(AppState);
  return [state, dispatch];
}

export const AppStateProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialAppState);

  return (
    <AppState.Provider value={{ state, dispatch }}>
      {children}
    </AppState.Provider>
  );
};
