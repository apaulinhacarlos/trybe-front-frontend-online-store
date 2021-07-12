import React from 'react';
import Search from './components/Search';
import RatingForm from './pages/RatingForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <Search />
        <RatingForm />
      </section>
    );
  }
}

export default App;
