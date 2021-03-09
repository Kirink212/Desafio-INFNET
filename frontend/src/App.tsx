import React, { Component, useEffect } from 'react';

// Styles
import './App.css';

// Hooks
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
