import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chart1 from './Chart.jsx';
import axios from 'axios';
import Form1 from './Form.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'chart'
        }
    }

    changeView(newView) {
        this.setState({
            view: newView
        })
    }

    render(){
        if(this.state.view === 'chart'){
            return (
                <div>
                    <Header update={this.changeView}/>
                    <Chart1 />
                    <Footer />
                </div>
            )
        } else if (this.state.view === 'about') {
            return (
                <div>
                    <Header update={this.changeView}/>
                    <div>about</div>
                    <Footer />
                </div>
            )

        } else if (this.state.view === 'contact') {
            return (
                <div>
                    <Header update={this.changeView}/>
                    <div>contact</div>
                    <Footer />
                </div>
            )
        }
    }
}

export default App;