import React from 'react';
import CategoriesList from './components/CategoriesList';

const FAKE_OBJ = [
  { id: '1', name: 'name1' },
  { id: '2', name: 'name2' },
  { id: '3', name: 'name3' },
];

function App() {
  return (
    <CategoriesList categories={ FAKE_OBJ } />
  );
}

export default App;
