import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import ThingsList from './components/ThingsList/thingsList';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Provider store={store}>
          <ThingsList />
        </Provider>
      </div>
      
    );
  }
}
export default App;