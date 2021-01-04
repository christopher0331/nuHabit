import axios from 'axios';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Form1 from './Form.jsx';

class Chart1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showHabit: 'exercise',
            exerciseData: [],
            dietData: [],
            starting: 22,
            ending: 150
        }
        this.getExerciseData = this.getExerciseData.bind(this);
        this.getDietData = this.getDietData.bind(this)
    }

    componentDidMount(){
     this.getExerciseData();
     this.getDietData();
    }

    getExerciseData(){
        axios.get('/exercise')
        .then((response) => {
            console.log(response.data.rows)
            this.setState({
                exerciseData: response.data.rows
            })
        })
    }

    getDietData(){
        axios.get('/diet')
        .then((response) => {
            this.setState({
                dietData: response.data.rows
            })
        })
    }


    render() {
        if(!this.state.exerciseData){
            return(
                <h1>Loading!</h1>
            )
        } else if(this.state.exerciseData && this.state.showHabit === 'exercise') {
            return (
                <div className='chart1'>
                    <h3>{this.state.showHabit}</h3>
                    {/* {console.log('from the top ==>', this.state.data)} */}
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.exerciseData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'exercise'} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 update={this.getData}/>
                </div>
          );
        } else if (this.state.dietData && this.state.showHabit === 'diet') {
            return(
                <div className='chart1'>
                    <h3>{this.state.showHabit}</h3>
                    <LineChart
                        width={800}
                        height={350}
                        data={this.state.dietData.slice(this.state.starting, this.state.ending)}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'inputdate'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey={'diet'} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                    <Form1 update={this.getData}/>
                </div>
            )
        }
    }
}

export default Chart1;