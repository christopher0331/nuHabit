import React from 'react';

const Header = () => {
    
    return(
        <div className='header'>
            <div className='logo'>nuHabit</div>
            <div className='menu' style={{fontFamily: 'quicksand'}}>
                <div className='menuItem'>Home</div>
                <div className='menuItem'>About</div>
                <div className='menuItem'>Contact</div>
            </div>
        </div>
    )
}

export default Header;