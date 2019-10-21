import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Counter from './components/Counter.js';
import './components/app.scss'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
