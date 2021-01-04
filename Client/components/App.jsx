import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chart1 from './Chart.jsx';
import axios from 'axios';
import Form1 from './Form.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)

    }

    render(){
        return (
            <div>
                <Header />
                <Chart1 />
                <Footer />
            </div>
        )
    }
}

export default App;