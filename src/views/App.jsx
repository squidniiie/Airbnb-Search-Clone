import '../static/style/App.css';
import React from 'react';
import Home from './Home'
import SearchPage from './SearchPage';
import Header from '../components/Header';
// import Banner from '../components/Banner';
import Footer from '../components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
