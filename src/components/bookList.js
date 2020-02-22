import React, {Component} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {AuthContext} from '../context/AuthContext';

class BookList extends Component{
    render(){
        return(
            <AuthContext.Consumer>{(authContext)=>{
                const {isAuthenticated, toggleAuth} = authContext;
                const value =isAuthenticated?'Logged In':'Logged Out'
                return(
                        <ThemeContext.Consumer>{(themeContext)=>{
                            const { isLightTheme, light, dark } = themeContext;
                            const theme = isLightTheme? light: dark;
                            return(
                                <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
                                    <div onClick={toggleAuth}>
                                        {value}
                                    </div>
                                    <ul>
                                        <li style={{background: theme.ui}}>the way of kings</li>
                                        <li style={{background: theme.ui}}>the name of the wind</li>
                                        <li style={{background: theme.ui}}>the final empire</li>
                                    </ul>
                                </div>
                            )
                        }}
                    </ThemeContext.Consumer>
                )
            }}
          </AuthContext.Consumer>
        )
    }
}

export default BookList;