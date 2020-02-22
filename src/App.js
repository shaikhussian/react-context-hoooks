import React from 'react';
import BookList from './components/bookList.js';
import NavBar from './components/navBar.js';
import ThemeContextProvider from './context/ThemeContext.js';
import AuthContextProvider from './context/AuthContext.js';
import BookContextProvider from './context/BookContext.js';
import ThemeToggle from './components/ThemeToggle.js';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <NavBar/>
          <BookContextProvider>
            <BookList/>
          </BookContextProvider>
          <ThemeToggle/>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
