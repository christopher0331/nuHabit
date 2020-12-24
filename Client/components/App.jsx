import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Chart1 from './Chart.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount(){
        axios.get('/exercise')
          .then((response) => {

          })
          .catch((error) => {

          })
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