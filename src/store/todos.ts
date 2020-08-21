import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      return [
        ...state,
        {
          id: id++,
          isCompleted: payload.isCompleted ?? false,
          text: payload.text
        }
      ];
    },
    remove: (state, { payload }) => {
      return state.filter((item) => item.id === payload.id);
    },
    update: (state, { payload: { id, ...itemFields } }) => {
      return state.map((item) =>
        item.id === id
          ? {
              ...item,
              ...itemFields
            }
          : item
      );
    }
  }
});
