import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RawgContextProvider from 'context/fetchContext';
import Home from 'pages/Home';
import PageDetails from 'pages/PageDetails';
import PageList from 'pages/PageList';
import Navbar from 'components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path={"/developer/:searchSlug" || "/games/:searchSlug"} element={<PageList />} />
        <Route exact path="/game/:gameSlug" element={<PageDetails />} />
      </Routes>
    </Router>
  );
};


ReactDOM.render(<RawgContextProvider><App /></RawgContextProvider>, document.getElementById('root'))