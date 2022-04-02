import React from 'react';
import logoImg from '../img/logo.png'
import Search from './Search';

const Header = ({onChange}) => {
    return (  
        <header className='header'>
            <div className="header__container">
                <div className="logo"><img src={logoImg} alt="logo" /></div>
                <Search getQuery={e => onChange(e)}/>
            </div>
        </header>
    );
}
 
export default Header;