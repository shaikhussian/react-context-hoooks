import React from 'react';
import BookList from './components/bookList.js';
import NavBar from './components/navBar.js';
import ThemeContextProvider from './context/ThemeContext.js'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar/>
        <BookList/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
