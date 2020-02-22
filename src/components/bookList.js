import React, {Component,useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {AuthContext} from '../context/AuthContext';
import {BookContext} from '../context/BookContext';


const BookList = ()=>{
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const value =isAuthenticated?'Logged In':'Logged Out'
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme? light: dark;
    const books = useContext(BookContext);
    return(
        <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
            <div onClick={toggleAuth}>
                {value}
            </div>
            <ul>
                {books.map(book=>{
                    return(
                    <li style={{background: theme.ui}}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BookList;