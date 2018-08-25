import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Dashboard from './components/Dashboard/dashboard.js';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
      
    );
  }
}
export default App;