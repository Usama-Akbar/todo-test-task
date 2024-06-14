// src/features/todos/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), title: action.payload.title, status: action.payload.status  });
    },
    editTodo: (state, action) => {
        const index = state.findIndex(todo => todo.id === action.payload.id);
        state[index] = action.payload;
        },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
