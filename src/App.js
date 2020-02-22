import React from 'react';
import BookList from './components/bookList.js';
import NavBar from './components/navBar.js';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <BookList/>
    </div>
  );
}

export default App;
