import React from 'react';

const Selector = (props) => (

    <div className='login'>
        <h1 style={{color: 'white'}}>Sign In</h1>
         <form onSubmit={props.changeView} >
            <label htmlFor="username">Username:
                <input type="text" id="username" name="username"></input><br/>
            </label>

            <label htmlFor="password">Password:
                <input type="password" id="pwd" name="pwd"></input>
            </label>
            <input id='loginSubmit' type="submit" value="Submit"/>
          </form>          
    </div>

)

export default Selector;