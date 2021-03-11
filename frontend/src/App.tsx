import React, { Component, useEffect } from 'react';

// Components
import Login from './components/Login';
import NavBar from './components/NavBar';
import SubjectList from './components/SubjectList';

// Router
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// Actions
import { fetchSubjects } from './actions/subjects';

// Redux
import { useDispatch } from 'react-redux';

// Material UI
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container maxWidth="sm">
        <Switch>
          <Route path="/" exact component={SubjectList}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
