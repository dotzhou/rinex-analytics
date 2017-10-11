import React from 'react';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';
import Content from './components/Content.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <NavBar />
        </div>        
        <div className="body">
          <div className="content">
            <Content />
          </div>
        </div>
        <div className="footer"> 
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

