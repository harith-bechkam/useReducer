import React, { useReducer, useState } from 'react';
import { ACTION_TYPES } from './postActionTypes';
import { INITIAL_STATE, postReducer } from './postReducer';

import './style.css';

export default function App() {
  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      name:
      <input
        type="text"
        name="name"
        placeholder="name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: ACTION_TYPES.FETCH_NAME, payload: e.target.value })
        }
      />
      city:
      <input
        type="text"
        name="city"
        placeholder="city"
        value={state.city}
        onChange={(e) =>
          dispatch({ type: ACTION_TYPES.FETCH_CITY, payload: e.target.value })
        }
      />
    </div>
  );
}
