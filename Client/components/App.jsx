import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chart1 from './Chart.jsx';
import axios from 'axios';
import Login from './Login.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            view: 'login',

        }
        this.changeView = this.changeView.bind(this);
    }

    changeView(){
        this.setState({
            view: 'loggedIn'
        })
    }

    render(){
        if(this.state.view === 'login'){
            return(
                <div className='firstPage'>
                    <Header />
                    <Login changeView={this.changeView}/>
                    {/* <Footer /> */}
                </div>
            )
        } else if(this.state.view === 'loggedIn') {
            return(
                <div>
                    <Header />
                    <h1 className='welcomeMessage'> Welcome Back Chris0331!</h1>

                    <Chart1 />
                    {/* <Footer /> */}
                </div>
            )
        }
    }
}

export default App;