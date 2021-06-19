import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route } from 'react-router-native';
import logo from './assets/logo.png';

import UserLogin from './components/UserLogin.js';
import Dashboard from './components/Dashboard.js';
import Books from './components/Books';

function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={UserLogin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/books" component = {Books} />
      <StatusBar style="auto" />
    </NativeRouter>
  );
}

export default App;
