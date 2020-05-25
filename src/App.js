import React from 'react';
import MainApp from './components/MainApp'

class App extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    return (
      <div className = "App">
        <MainApp>
        </MainApp>
      </div>
    );
  }
}

export default App;