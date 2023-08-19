import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {CssBaseline} from '@mui/material';
import TodoList from './TodoList';
function App(){

  return (
    <>
      <CssBaseline/>
      <h1>TODOS</h1>
      <TodoList />
    </>
  )
}

export default App
